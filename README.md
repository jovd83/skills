# Agent Skills

A collection of agent skills across multiple topics. Automatically updated when new skills are added to my profile.

## Software development

Skills covering the build phases of the software development lifecycle, from analysis and coding through release.

### Analysis & requirements

Skills for turning intent into requirements, acceptance criteria, user stories, and grounded architecture diagrams before any code is written.

- **[plantuml-skill](https://github.com/jovd83/plantuml-skill)** — Professional PlantUML and C4 diagram skill for architecture visualization, sequence flows, and technical documentation.

  *Topics:* `agent-skills`, `analysis`, `diagrams`, `harness-execution-layer`, `plantuml`, `uml`

  ```bash
  npx skills@latest add jovd83/plantuml-skill
  ```

- **[diagram-generator](https://github.com/jovd83/diagram-generator)** — Creates grounded Mermaid-first software diagrams and compact architecture documentation from code, schemas, and requirements.

  *Topics:* `agent-skill`, `agent-skills`, `analysis`, `diagrams`, `harness-execution-layer`, `mermaid`

  ```bash
  npx skills@latest add jovd83/diagram-generator
  ```

- **[backlog-story-generator](https://github.com/jovd83/backlog-story-generator)** — Generates epics, backlog-ready user stories, and importable story packs from requirements, discovery notes, or codebases.

  *Topics:* `agent-skills`, `analysis`, `epic`, `harness-execution-layer`, `user-story`

  ```bash
  npx skills@latest add jovd83/backlog-story-generator
  ```

- **[acceptance-criteria-designer](https://github.com/jovd83/acceptance-criteria-designer)** — Turns raw product requirements into testable acceptance criteria, coverage notes, and machine-readable contracts.

  *Topics:* `acceptance-criteria`, `agent-skill`, `agent-skills`, `analysis`, `harness-feedback-layer`

  ```bash
  npx skills@latest add jovd83/acceptance-criteria-designer
  ```

### Coding, refactoring & delivery

Skills that help write new code, audit and refactor existing structures, manage defects, and keep the stack modern.

- **[bug-fix-lifecycle](https://github.com/jovd83/bug-fix-lifecycle)** — Guides defects from intake to verified fix with failing confirmation tests, scoped remediation, and structured resolution reporting.

  *Topics:* `agent-skills`, `bugfix`, `coding`, `defects`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/bug-fix-lifecycle
  ```

- **[principal-audit-refactor](https://github.com/jovd83/principal-audit-refactor)** — Runs severity-ranked engineering audits and executes approval-gated refactors to raise prototype code to production quality.

  *Topics:* `agent-skill`, `agent-skills`, `auditing`, `coding`, `harness-execution-layer`, `refactoring`, `technical-review`

  ```bash
  npx skills@latest add jovd83/principal-audit-refactor
  ```

- **[new-feature-sdlc-skill](https://github.com/jovd83/new-feature-sdlc-skill)** — Orchestrates approved feature delivery from discovery through implementation, testing, documentation, and release-ready closeout.

  *Topics:* `agent-skill`, `agent-skills`, `coding`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/new-feature-sdlc-skill
  ```

- **[modern-dependency-guard](https://github.com/jovd83/modern-dependency-guard)** — Reviews and modernizes stacks, packages, SDKs, and tooling before code is written against them.

  *Topics:* `agent-behavior`, `agent-skill`, `depencency-check`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/modern-dependency-guard
  ```

### Release & operations

Skills for preparing releases, changelogs, version bumps, and post-release CI follow-through.

- **[release-manager-skill](https://github.com/jovd83/release-manager-skill)** — Prepares GitHub repositories for release with changelog validation, semver selection, safe staging, push, and CI follow-through.

  *Topics:* `agent-skills`, `github`, `harness-execution-layer`, `release-management`

  ```bash
  npx skills@latest add jovd83/release-manager-skill
  ```

## Quality & testing

Skills covering the full quality lifecycle: test analysis and design, automation frameworks, specialized testing disciplines, test data, and contract or design fidelity.

### Test design & review

Skills for analyzing requirements for testability, designing test cases with the right black-box technique, and reviewing drafted or automated tests for quality and coverage.

- **[test-design-orchestrator](https://github.com/jovd83/test-design-orchestrator)** — Transforms requirements and business rules into structured software test artifacts using the right black-box design technique.

  *Topics:* `agent-skills`, `harness-execution-layer`, `test-case`, `test-design`, `test-scenario`, `testing`

  ```bash
  npx skills@latest add jovd83/test-design-orchestrator
  ```

- **[test-artifact-export-skill](https://github.com/jovd83/test-artifact-export-skill)** — Formats approved test artifacts into review-ready docs and importable outputs for Gherkin, Xray, Zephyr, TestLink, and TestRail.

  *Topics:* `agent-skill`, `bdd`, `harness-execution-layer`, `tdd`, `testing`

  ```bash
  npx skills@latest add jovd83/test-artifact-export-skill
  ```

- **[test-analysis-skill](https://github.com/jovd83/test-analysis-skill)** — Analyzes requirements and use cases for ambiguity, testability, delivery risk, and missing stakeholder decisions.

  *Topics:* `agent-skills`, `harness-execution-layer`, `static-testing`, `test-analysis`, `testing`

  ```bash
  npx skills@latest add jovd83/test-analysis-skill
  ```

- **[tdd-test-case-reviewer](https://github.com/jovd83/tdd-test-case-reviewer)** — Reviews and scores drafted test cases for traceability, correctness, standards compliance, and TDD or TSS quality.

  *Topics:* `agent-skills`, `tdd`, `test-review`, `testing`

  ```bash
  npx skills@latest add jovd83/tdd-test-case-reviewer
  ```

- **[automated-test-reviewer](https://github.com/jovd83/automated-test-reviewer)** — Explains automated tests in business language and reviews automation quality, coverage, and traceability.

  *Topics:* `agent-skill`, `agent-skills`, `functional-review`, `harness-execution-layer`, `test-review`, `testing`

  ```bash
  npx skills@latest add jovd83/automated-test-reviewer
  ```

- **[agentic-bdd-test-case-mentor](https://github.com/jovd83/agentic-bdd-test-case-mentor)** — Reviews and improves BDD and Gherkin scenarios with coaching on traceability, coverage gaps, and Given-When-Then quality.

  *Topics:* `agent-skills`, `harness-execution-layer`, `tdd`, `test-review`, `testing`

  ```bash
  npx skills@latest add jovd83/agentic-bdd-test-case-mentor
  ```

### Test automation frameworks

Skills for authoring and operating test automation in specific frameworks (Cypress, Playwright, JUnit 5, Rest Assured) plus stack-aware unit and component tests.

- **[playwright-skill](https://github.com/jovd83/playwright-skill)** — End-to-end Playwright skill pack for planning, authoring, debugging, documenting, and operationalizing test automation.

  *Topics:* `agent-skill`, `agent-skills`, `harness-execution-layer`, `playwright`, `testing`

  ```bash
  npx skills@latest add jovd83/playwright-skill
  ```

- **[Cypress-skill](https://github.com/jovd83/Cypress-skill)** — End-to-end Cypress skill pack for planning, authoring, debugging, documenting, and operationalizing test automation.

  *Topics:* `agent-skill`, `agent-skills`, `cypress`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/Cypress-skill
  ```

- **[stack-aware-unit-testing-skill](https://github.com/jovd83/stack-aware-unit-testing-skill)** — Inspects a codebase, detects the test stack, and plans or writes isolated unit and component tests safely.

  *Topics:* `agent-skill`, `agent-skills`, `component-testing`, `harness-execution-layer`, `testing`, `unit-testing`

  ```bash
  npx skills@latest add jovd83/stack-aware-unit-testing-skill
  ```

- **[restassured-skill](https://github.com/jovd83/restassured-skill)** — Rest Assured skill pack for designing, implementing, documenting, and reporting API tests in Java and CI workflows.

  *Topics:* `agent-skill`, `agent-skills`, `harness-execution-layer`, `restassured`, `testing`

  ```bash
  npx skills@latest add jovd83/restassured-skill
  ```

- **[junit5-skill](https://github.com/jovd83/junit5-skill)** — JUnit 5 skill pack for creating, debugging, modernizing, documenting, and routing JVM test workflows.

  *Topics:* `agent-skill`, `agent-skills`, `harness-execution-layer`, `junit5`, `testing`

  ```bash
  npx skills@latest add jovd83/junit5-skill
  ```

### Specialized testing

Skills for testing concerns that cut across features: performance, responsive behavior, accessibility, and security.

- **[a11y-audit-agent-skill](https://github.com/jovd83/a11y-audit-agent-skill)** — Accessibility audit skill for web apps that combines automated scanning, manual verification, and remediation-ready WCAG reports.

  *Topics:* `accessibility`, `agent-skill`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/a11y-audit-agent-skill
  ```

- **[defensive-appsec-review-skill](https://github.com/jovd83/defensive-appsec-review-skill)** — Authorized defensive AppSec review skill for repositories, APIs, CI/CD, IaC, and AI systems with findings-first output.

  *Topics:* `agent-skill`, `agent-skills`, `harness-feedback-layer`, `security`, `testing`

  ```bash
  npx skills@latest add jovd83/defensive-appsec-review-skill
  ```

- **[responsive-testing](https://github.com/jovd83/responsive-testing)** — Plans and runs responsive frontend testing across devices and screen sizes, with normalized reporting outputs.

  *Topics:* `agent-skills`, `harness-execution-layer`, `responsive`, `testing`

  ```bash
  npx skills@latest add jovd83/responsive-testing
  ```

- **[performance-testing-skill](https://github.com/jovd83/performance-testing-skill)** — Plans, executes, and analyzes safe performance testing for APIs, web apps, services, and distributed systems.

  *Topics:* `agent-skills`, `harness-execution-layer`, `performance`, `testing`

  ```bash
  npx skills@latest add jovd83/performance-testing-skill
  ```

### Test data

Skills for generating realistic, seeded, and distribution-shaped synthetic data for tests, demos, and sandboxes.

- **[lifelike-synthetic-data-generator](https://github.com/jovd83/lifelike-synthetic-data-generator)** — Generates realistic synthetic datasets for tests and demos with seeded, locale-aware, and distribution-shaped data.

  *Topics:* `agent-skill`, `agent-skills`, `harness-execution-layer`, `synthetic-dataset-generation`, `testing`

  ```bash
  npx skills@latest add jovd83/lifelike-synthetic-data-generator
  ```

### Design fidelity & contracts

Skills that catch drift between an implementation and its source of truth — design systems, API contracts, schemas.

- **[api-contract-sentinel](https://github.com/jovd83/api-contract-sentinel)** — Audits APIs against OpenAPI, AsyncAPI, JSON Schema, protobuf, or PRD contracts to catch drift before release.

  *Topics:* `agent-behavior`, `agent-skill`, `api-contract`, `feedback-layer`, `harness-feedback-layer`

  ```bash
  npx skills@latest add jovd83/api-contract-sentinel
  ```

- **[design-fidelity-auditor](https://github.com/jovd83/design-fidelity-auditor)** — Audits frontend implementations for design-system drift across CSS, Tailwind, JSX, TSX, Vue, and Angular code.

  *Topics:* `agent-behavior`, `agent-skill`, `design-system`, `feedback-layer`, `harness-feedback-layer`

  ```bash
  npx skills@latest add jovd83/design-fidelity-auditor
  ```

## Agent platform

Skills that support the agent runtime itself: context and memory, orchestration, prompt and telemetry quality, and skill maintenance.

### Context & memory

Skills that build, prune, persist, and clean up the information layer an agent reasons over.

- **[shared-memory](https://github.com/jovd83/shared-memory)** — Manages durable cross-agent shared memory for stable conventions, reusable policies, and organization-wide operating rules.

  *Topics:* `agent-behavior`, `agent-skill`, `agent-skills`, `harness-information-layer`, `memory`

  ```bash
  npx skills@latest add jovd83/shared-memory
  ```

- **[codebase-context](https://github.com/jovd83/codebase-context)** — Builds concise repository context bundles covering structure, entry points, dependencies, tests, conventions, and risks.

  *Topics:* `agent-skill`, `harness-information-layer`

  ```bash
  npx skills@latest add jovd83/codebase-context
  ```

- **[shared-memory-janitor](https://github.com/jovd83/shared-memory-janitor)** — Consolidates and cleans shared memory by merging duplicates, resolving conflicts, and removing non-reusable noise.

  *Topics:* `agent`, `agent-skill`, `agent-skills-helper`, `harness-information-layer`, `memory`, `skill-behavior`

  ```bash
  npx skills@latest add jovd83/shared-memory-janitor
  ```

- **[context-density-optimizer](https://github.com/jovd83/context-density-optimizer)** — context-density-optimizer is an AgentSkill for pruning bloated working context before implementation, review, debugging, or planning work

  *Topics:* `agent-skill`, `harness-information-layer`

  ```bash
  npx skills@latest add jovd83/context-density-optimizer
  ```

### Orchestration & dispatch

Skills that route work to the right skill and execute multi-phase agent chains end-to-end.

- **[skill-orchestrator](https://github.com/jovd83/skill-orchestrator)** — Execution layer for skill-dispatcher — runs multi-phase agent chains end-to-end with per-step telemetry and chain_id correlation

  *Topics:* `agent-behavior`, `agent-skill`, `agentskill`, `ai-orchestration`, `chain-execution`, `orchestrator`, `skill-dispatcher`

  ```bash
  npx skills@latest add jovd83/skill-orchestrator
  ```

- **[skill-dispatcher](https://github.com/jovd83/skill-dispatcher)** — High-performance routing engine that selects the best agent skill for a task and emits structured handoff decisions.

  *Topics:* `agent-behavior`, `agent-skill`, `agent-skills`, `dispatcher`, `harness-execution-layer`

  ```bash
  npx skills@latest add jovd83/skill-dispatcher
  ```

### Prompt & telemetry

Skills that score prompts for clarity and structure, and produce auditable token-usage and cost reports from runtime evidence.

- **[token-usage-cost-report](https://github.com/jovd83/token-usage-cost-report)** — Produces auditable token-usage and cost reports from runtime evidence, normalized usage bundles, and repository-level report sets.

  *Topics:* `agent-behavior`, `agent-skill`, `agent-skills`, `harness-execution-layer`, `tokens`

  ```bash
  npx skills@latest add jovd83/token-usage-cost-report
  ```

- **[prompt-efficacy-scorer](https://github.com/jovd83/prompt-efficacy-scorer)** — Scores and improves prompts for clarity, consistency, signal density, structure, and runtime fit.

  *Topics:* `agent-behavior`, `agent-skill`, `feedback-layer`, `harness-feedback-layer`, `prompt-engineering`

  ```bash
  npx skills@latest add jovd83/prompt-efficacy-scorer
  ```

### Skill maintenance

Skills that maintain other skills — frontmatter hygiene, metadata cleanup, YAML optimization.

- **[skill-yaml-cleanup](https://github.com/jovd83/skill-yaml-cleanup)** — Audit and reduce YAML frontmatter bloat in AgentSkill SKILL.md files. Automates deduplication, flattening, and noise removal.

  *Topics:* `agent-behavior`, `agent-skills`, `agentskills`, `automation`, `cli-tool`, `frontmatter-optimization`, `metadata-management`, `python`, `yaml`

  ```bash
  npx skills@latest add jovd83/skill-yaml-cleanup
  ```

## Governance & compliance

Skills that design human-oversight controls, handoff contracts, and review flows aligned with regulatory regimes such as the EU AI Act.

### Oversight & HITL

Skills for human-in-the-loop oversight, handoff design, and regulatory-aligned review flows.

- **[eu-ai-act-hitl-monitor-skill](https://github.com/jovd83/eu-ai-act-hitl-monitor-skill)** — Designs and validates human-oversight controls, handoff contracts, and review flows for EU AI Act-aligned agent systems.

  *Topics:* `agent-skills`, `hitl`

  ```bash
  npx skills@latest add jovd83/eu-ai-act-hitl-monitor-skill
  ```

## Agile facilitation

Skills supporting agile ceremonies, retrospectives, and team facilitation artifacts.

### Ceremonies & retrospectives

Skills for designing retrospective boards, capturing outcomes, and turning them into action items and tracker-ready output.

- **[retro-board-creator](https://github.com/jovd83/retro-board-creator)** — Agent Skill for designing visually engaging agile/scrum retrospective boards (Draw.io, Mermaid, PNG/SVG, Microsoft Whiteboard) and turning completed retros into summaries, action items, and Jira/Confluence-ready output.

  *Topics:* `agentskills`, `agile`, `ai-agent`, `anthropic`, `claude`, `claude-code`, `confluence`, `drawio`, `facilitation`, `jira`, `mermaid`, `retrospective`, `scrum`

  ```bash
  npx skills@latest add jovd83/retro-board-creator
  ```

## Smart Home

Skills for smart home integration, devices, and home automation.

### Home automation

Skills related to home automation, device control, and smart integrations.

- **[loxberry-integrator](https://github.com/jovd83/loxberry-integrator)** — Agent skill that generates GitHub-ready LoxBerry plugin projects integrating devices, services, APIs, or protocols (MQTT, REST, UDP, Modbus, WebSocket) with a Loxone Miniserver.

  *Topics:* `agentskills`, `code-generation`, `homeautomation`, `loxberry`, `loxberry-plugin`, `modbus`, `mqtt`, `plugin-generator`, `smarthome`

  ```bash
  npx skills@latest add jovd83/loxberry-integrator
  ```

