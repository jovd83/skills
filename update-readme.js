const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'jovd83';
const TARGET_TOPICS = ['agent-skill', 'agent-skills', 'agentskill', 'agentskills', 'agent-skills-helper', 'agent-skill-helper'];

// Define headers for authentication if token is provided
const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'node.js'
};

if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
}

async function fetchAllRepos() {
    let allRepos = [];
    let page = 1;
    console.log(`Fetching repositories for ${GITHUB_USERNAME}...`);

    while (true) {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`, { headers });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const repos = await response.json();
        if (repos.length === 0) break;

        allRepos = allRepos.concat(repos);
        page++;
    }

    console.log(`Fetched ${allRepos.length} total repositories.`);
    return allRepos;
}

function processRepos(repos, config) {
    // Filter for skills
    const skillRepos = repos.filter(repo => {
        if (!repo.topics) return false;
        return repo.topics.some(topic => TARGET_TOPICS.includes(topic.toLowerCase()));
    });

    console.log(`Found ${skillRepos.length} skill repositories.`);

    // Initialize categories structure
    const outputData = {};

    config.categories.forEach(cat => {
        outputData[cat.name] = {
            description: cat.description,
            subcategories: {}
        };
        cat.subcategories.forEach(sub => {
            outputData[cat.name].subcategories[sub.name] = {
                description: sub.description,
                repos: []
            };
        });
    });

    // We'll also maintain an "Other" category for fallbacks
    outputData[config.defaultCategory] = {
        description: config.defaultCategoryDescription,
        subcategories: {
            [config.defaultSubcategory]: {
                description: config.defaultSubcategoryDescription,
                repos: []
            }
        }
    };

    // Helper to find category
    function findCategory(repoTopics) {
        if (!repoTopics || repoTopics.length === 0) return null;

        for (const cat of config.categories) {
            for (const sub of cat.subcategories) {
                if (repoTopics.some(t => sub.topics.includes(t.toLowerCase()))) {
                    return { catName: cat.name, subName: sub.name };
                }
            }
        }
        return null;
    }

    skillRepos.forEach(repo => {
        let location = findCategory(repo.topics);
        if (!location) {
            location = { catName: config.defaultCategory, subName: config.defaultSubcategory };
        }

        outputData[location.catName].subcategories[location.subName].repos.push(repo);
    });

    return outputData;
}

function generateMarkdown(outputData) {
    let markdown = `# Agent Skills\n\nA collection of agent skills across multiple topics. Automatically updated when new skills are added to my profile.\n\n`;

    // Iterate through categories
    for (const [catName, catData] of Object.entries(outputData)) {
        // Skip if category has no repos recursively
        const hasRepos = Object.values(catData.subcategories).some(sub => sub.repos.length > 0);
        if (!hasRepos) continue;

        markdown += `## ${catName}\n\n`;
        if (catData.description) {
            markdown += `${catData.description}\n\n`;
        }

        for (const [subName, subData] of Object.entries(catData.subcategories)) {
            if (subData.repos.length === 0) continue;

            markdown += `### ${subName}\n\n`;
            if (subData.description) {
                markdown += `${subData.description}\n\n`;
            }

            subData.repos.forEach(repo => {
                const desc = repo.description ? repo.description : 'No description provided.';
                markdown += `- **[${repo.name}](${repo.html_url})** — ${desc}\n\n`;

                if (repo.topics && repo.topics.length > 0) {
                    markdown += `  *Topics:* ${repo.topics.map(t => '\`' + t + '\`').join(', ')}\n\n`;
                }

                markdown += `  \`\`\`bash\n`;
                markdown += `  npx skills@latest add ${GITHUB_USERNAME}/${repo.name}\n`;
                markdown += `  \`\`\`\n\n`;
            });
        }
    }

    return markdown;
}

async function main() {
    try {
        const configPath = path.join(__dirname, 'skills-config.json');
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

        const allRepos = await fetchAllRepos();
        const categorizedData = processRepos(allRepos, config);
        const readmeContent = generateMarkdown(categorizedData);

        const readmePath = path.join(__dirname, 'README.md');
        fs.writeFileSync(readmePath, readmeContent, 'utf8');

        console.log('README.md successfully updated!');
    } catch (e) {
        console.error('Error updating skills:', e);
        process.exit(1);
    }
}

main();
