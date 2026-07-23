export const PROJECTS = [
  {
    name: "mcprobe",
    tagline: "your MCP server is probably vulnerable.",
    overview:
      "mcprobe connects to any MCP server, introspects its tools, prompts, and resources, then scans for prompt injection, tool shadowing, resource exposure, and drift from baseline. you connected a server to your agent without checking it. this tells you what you missed.",
    description:
      "a Go CLI that acts as a security scanner for MCP servers. implements the MCP client protocol from scratch with stdio and HTTP transports. detects 18 prompt injection patterns in tool descriptions, flags tool name shadowing, saves baselines and diffs for drift detection, scans for resource exposure to sensitive paths, and exports SARIF 2.1.0 for CI pipelines. pure Go stdlib, zero dependencies, single static binary.",
    tech: [
      "Go",
      "MCP",
      "CLI",
      "SARIF",
      "Security",
    ],
    link: "https://github.com/tamish560/mcprobe",
    github: "https://github.com/tamish560/mcprobe",
    images: {
      hero: "/tamish-portfolio/mcprobe-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/mcprobe-hero.png",
          alt: "mcprobe scan report output",
          caption: "Security scan with risk score",
        },
      ],
    },
    features: [
      "18 prompt injection pattern detectors for tool, prompt, and schema descriptions",
      "tool shadowing detection across multiple MCP servers",
      "baseline snapshots and drift detection for rug-pull attacks",
      "resource exposure detection for sensitive paths (/etc, .ssh, .env, credentials)",
      "risk scoring 0-100 with severity levels",
      "SARIF 2.1.0 output for GitHub Actions and CI integration",
      "zero dependencies, Go stdlib only, single static binary",
    ],
    technicalDetails: [
      {
        title: "MCP Client Implementation",
        description:
          "Implements the full MCP client handshake (initialize, notifications/initialized) and introspection (tools/list, prompts/list, resources/list) from scratch over JSON-RPC. Supports both stdio and HTTP transports with a clean Transport interface.",
      },
      {
        title: "Injection Detection Engine",
        description:
          "18 regex patterns scan tool descriptions, prompt descriptions, and schema property descriptions for known injection vectors: 'ignore previous instructions', 'you are now a...', 'execute arbitrary commands', 'curl | bash', 'exfiltrate data', 'bypass security', and more.",
      },
    ],
    challenges: [
      {
        problem: "MCP servers can silently change tool descriptions after initial trust",
        solution:
          "Baseline snapshots record the full server state. Diff mode compares current state against baseline, flagging description changes as CRITICAL (potential rug-pull), tool additions as MEDIUM, and removals as HIGH.",
      },
    ],
    metrics: {
      stars: "2+",
      patterns: "18",
      deps: "0",
      formats: "3",
    },
  },
  {
    name: "Relay",
    tagline: "one MCP server, 40 tools, one binary.",
    overview:
      "other people install 5 MCP servers to do what relay does alone. 40 tools across filesystem, web, search, code, git, system, and utility. one Go binary, zero runtime dependencies. works with any MCP-compatible client.",
    description:
      "a Go-based MCP server providing 40 tools for AI coding agents. filesystem operations, web fetching and search, code analysis, git operations, system commands, and utility functions. boring tech on purpose: Go stdlib, no frameworks, single binary, MIT licensed.",
    tech: [
      "Go",
      "MCP",
      "SQLite",
      "npm",
      "GitHub Actions",
    ],
    link: "https://github.com/valtors/relay",
    github: "https://github.com/valtors/relay",
    images: {
      hero: "/tamish-portfolio/relay-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/relay-hero.png",
          alt: "Relay project landing page",
          caption: "40 tools across 7 categories",
        },
      ],
    },
    features: [
      "40 tools across 7 categories: filesystem, web, search, code, git, system, utility",
      "single Go binary, zero runtime dependencies",
      "available on npm as userelay",
      "works with any MCP-compatible client",
      "config and doctor commands for environment diagnostics",
    ],
    technicalDetails: [
      {
        title: "Architecture",
        description:
          "Built with Go stdlib only. Tool registration is a simple map of name to handler. No reflection, no code generation, no magic. Each tool is a function that takes a context and returns a result.",
      },
      {
        title: "Distribution",
        description:
          "Ships as a single Go binary and also as an npm package (userelay) that wraps the binary. The npm package handles cross-platform installation and PATH setup.",
      },
    ],
    challenges: [
      {
        problem: "Cross-platform npm wrapper for a Go binary",
        solution:
          "The npm package downloads the right pre-built binary for the platform at install time, avoiding the need for users to have Go installed.",
      },
    ],
    metrics: {
      stars: "12+",
      loadTime: "< 1s",
      tools: "40",
      categories: "7",
    },
  },
  {
    name: "Reflow",
    tagline: "8 frameworks. same API. no SSR breakage.",
    overview:
      "responsive toolkit for TypeScript that doesn't break server-side rendering. same hooks in React, Vue, Svelte, Solid, Angular, Preact, Qwik, and vanilla JS. no hydration mismatch warnings. no typeof window checks. no framework lock-in.",
    description:
      "a framework-agnostic responsive toolkit that provides hooks, composables, and utilities for building responsive UIs. ships with 8 framework adapters so you use the same API everywhere. SSR-safe, tree-shakeable, zero runtime dependencies.",
    tech: [
      "TypeScript",
      "React",
      "Vue",
      "Svelte",
      "Vite",
    ],
    link: "https://valtors.github.io/reflow/",
    github: "https://github.com/valtors/reflow",
    images: {
      hero: "/tamish-portfolio/reflow-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/reflow-hero.png",
          alt: "Reflow project landing page",
          caption: "Docs site with live examples",
        },
      ],
    },
    features: [
      "8 framework adapters: React, Vue, Svelte, Solid, Angular, Preact, Qwik, vanilla",
      "SSR-safe with no hydration mismatches",
      "tree-shakeable, zero runtime dependencies",
      "available on npm as usereflow",
    ],
    technicalDetails: [
      {
        title: "Framework Adapter Pattern",
        description:
          "Each adapter wraps the core logic in framework-specific reactivity primitives. The core is framework-agnostic TypeScript that works with any reactive system.",
      },
    ],
    challenges: [
      {
        problem: "SSR hydration mismatches in responsive UIs",
        solution:
          "Reflow uses a store-based approach that renders consistently on server and client, avoiding the common mismatch problem that breaks hydration.",
      },
    ],
    metrics: {
      stars: "7+",
      adapters: "8",
      downloads: "1904/mo",
    },
  },
  {
    name: "Observer",
    tagline: "it watches your agent. silently.",
    overview:
      "your agent makes 30 tool calls. you see the final text. observer logs every call to SQLite so you can see what actually happened. sits between your MCP client and server, transparent, silent.",
    description:
      "a Go-based MCP proxy that sits between an AI agent and its MCP server, logging every tool call to a local SQLite database. security-hardened: metadata-only traces by default, 0600 DB permissions, session-scoped queries, configurable redaction, raw payload access behind an explicit environment variable. SSE transport and tool filtering included.",
    tech: [
      "Go",
      "MCP",
      "SQLite",
      "stdio",
    ],
    link: "https://github.com/valtors/observer",
    github: "https://github.com/valtors/observer",
    images: {
      hero: "/tamish-portfolio/observer-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/observer-hero.png",
          alt: "Observer project landing page",
          caption: "Proxy between agent and MCP server",
        },
      ],
    },
    features: [
      "metadata-only traces by default (tool name, timing, hash, status)",
      "raw payload opt-in via OBSERVER_RAW_PAYLOAD=1",
      "configurable redaction with OBSERVER_REDACT_PATTERNS",
      "session-scoped queries prevent cross-session data leakage",
      "SSE transport for remote setups",
      "tool filtering to reduce token overhead",
      "trace.history, trace.search, trace.stats, trace.replay as MCP tools",
    ],
    technicalDetails: [
      {
        title: "Trust Boundary Design",
        description:
          "The core insight is that observability for AI agents has a new trust boundary: what the operator stores locally vs what the agent can see in its context window. Observer keeps raw payloads operator-local and only exposes metadata to the agent.",
      },
      {
        title: "Security Hardening",
        description:
          "Tested by an external contributor who found raw tool arguments leaking back into agent context via trace search. Fixed with metadata-only default, opt-in raw, pre-persistence redaction, session isolation, and 0600 DB perms.",
      },
    ],
    challenges: [
      {
        problem: "Raw tool arguments leaking back into agent context through trace search",
        solution:
          "Moved to metadata-only tracing by default. Raw payloads require explicit OBSERVER_RAW_PAYLOAD=1 environment variable. Added regex-based redaction layer that runs before storage. SHA-256 hash lets agents verify a call happened without seeing sensitive content.",
      },
    ],
    metrics: {
      stars: "3+",
      security: "Hardened",
    },
  },
  {
    name: "Vault",
    tagline: "run untrusted agents without burning down your machine.",
    overview:
      "not a real sandbox. an audit layer. strips secrets from environment variables, blocks sensitive file paths, scans for prompt injection in tool descriptions, logs every action to SQLite. honest about what it is and what it isn't.",
    description:
      "a Go-based security layer for AI agents. environment sanitization removes API keys and tokens before the agent runs. path blocking prevents access to sensitive directories. injection scanning checks tool descriptions for known attack patterns. all actions logged to a local SQLite database with 0600 permissions.",
    tech: ["Go", "MCP", "SQLite", "Security"],
    link: "https://github.com/valtors/vault",
    github: "https://github.com/valtors/vault",
    images: {
      hero: "/tamish-portfolio/observer-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/observer-hero.png",
          alt: "Vault security layer",
          caption: "Audit layer for AI agents",
        },
      ],
    },
    features: [
      "environment variable sanitization removes secrets before agent execution",
      "path-based access control for sensitive directories",
      "prompt injection scanning in tool descriptions",
      "SQLite audit log with 0600 permissions",
      "not a real sandbox. honest about that.",
    ],
    technicalDetails: [
      {
        title: "Honest Scope",
        description:
          "Vault doesn't pretend to be a full sandbox. it's an audit layer that reduces the blast radius of untrusted agents. the README says this explicitly. no false sense of security.",
      },
    ],
    challenges: [
      {
        problem: "Agents need access to do useful work but shouldn't touch everything",
        solution:
          "Path-based allow/deny lists with sensible defaults. secrets stripped from environment but accessible through an explicit allowlist. the agent sees a cleaned-up view of the world.",
      },
    ],
    metrics: {
      stars: "1+",
      deps: "0",
    },
  },
  {
    name: "Cairn",
    tagline: "agents forget. this makes them remember.",
    overview:
      "temporal knowledge store in one SQLite file. facts are triples with validity windows. contradictions close old facts, they don't delete them. forgetting is a first-class operation. you can ask what was true on any date.",
    description:
      "a Rust-based temporal knowledge graph for AI agents. stores facts as subject-predicate-object triples with confidence, recording timestamp, and validity windows. when a new fact contradicts an old one, the old fact is closed, not deleted. queries can time-travel: ask what was known on any date. one SQLite file, zero external dependencies.",
    tech: ["Rust", "SQLite", "MCP"],
    link: "https://github.com/valtors/cairn",
    github: "https://github.com/valtors/cairn",
    images: {
      hero: "/tamish-portfolio/observer-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/observer-hero.png",
          alt: "Cairn knowledge store",
          caption: "Temporal facts with validity windows",
        },
      ],
    },
    features: [
      "temporal triples: subject, predicate, object, confidence, valid_from, valid_to",
      "contradictions close old facts, never delete them",
      "time-travel queries: what was true on date X",
      "forgetting as a first-class operation",
      "one SQLite file, 7 Rust crates, zero external deps",
    ],
    technicalDetails: [
      {
        title: "Temporal Model",
        description:
          "Every fact has a validity window. New facts that contradict old ones close the old fact's valid_to. You can reconstruct the state of knowledge at any point in time. Nothing is ever lost.",
      },
    ],
    challenges: [
      {
        problem: "Agents need persistent memory but facts change over time",
        solution:
          "Bitemporal model. Facts are never deleted, only closed. The query engine reconstructs the active set at any timestamp. Contradictions are resolved by closing the older fact.",
      },
    ],
    metrics: {
      stars: "1+",
      crates: "7",
      deps: "0",
    },
  },
  {
    name: "Smith",
    tagline: "npm made javascript installable. this does it for MCP.",
    overview:
      "install, compose, secure, and manage MCP servers. one binary. fetch from npm, git, or local path. spawn all installed servers and expose one unified endpoint. like npm but for MCP.",
    description:
      "a Rust-based package manager for MCP servers. install servers from npm, git, or local paths. compose multiple servers into one unified endpoint. secure with built-in injection scanning. 6 Rust crates, zero external dependencies, MIT licensed.",
    tech: ["Rust", "MCP", "npm"],
    link: "https://github.com/valtors/smith",
    github: "https://github.com/valtors/smith",
    images: {
      hero: "/tamish-portfolio/observer-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/observer-hero.png",
          alt: "Smith package manager",
          caption: "npm for MCP servers",
        },
      ],
    },
    features: [
      "install MCP servers from npm, git, or local path",
      "compose multiple servers into one unified endpoint",
      "built-in injection scanning for installed servers",
      "profile-based configuration for different setups",
      "6 Rust crates, zero external dependencies",
    ],
    technicalDetails: [
      {
        title: "Composition Engine",
        description:
          "Smith spawns all installed MCP servers and exposes them through a single endpoint. The client sees one server with all tools. Smith handles routing, lifecycle, and health checks.",
      },
    ],
    challenges: [
      {
        problem: "Managing multiple MCP servers is painful",
        solution:
          "Smith handles installation, configuration, spawning, and composition. One command to install, one to run. The profile system lets you switch between setups instantly.",
      },
    ],
    metrics: {
      stars: "1+",
      crates: "6",
      deps: "0",
    },
  },
  {
    name: "Pulse",
    tagline: "thirty-eight notifications. three urgent items. your AI does the rest.",
    overview:
      "connect github, gmail, calendar. asks 'what did i miss' and gets a real answer. remembers what matters, forgets what doesn't. local-first, single binary, one SQLite database.",
    description:
      "a Go-based AI inbox that connects to github, gmail, and calendar. processes notifications, identifies what's urgent, and gives you a summary instead of a wall of badges. remembers context in cairn. local-first, no cloud, no telemetry.",
    tech: ["Go", "MCP", "SQLite"],
    link: "https://github.com/valtors/pulse",
    github: "https://github.com/valtors/pulse",
    images: {
      hero: "/tamish-portfolio/observer-hero.png",
      gallery: [
        {
          src: "/tamish-portfolio/observer-hero.png",
          alt: "Pulse AI inbox",
          caption: "Your AI inbox",
        },
      ],
    },
    features: [
      "github, gmail, calendar integration",
      "AI-powered summarization: what did i miss",
      "urgency detection and prioritization",
      "context persistence via cairn integration",
      "local-first, single binary, one SQLite database",
    ],
    technicalDetails: [
      {
        title: "Local-First Architecture",
        description:
          "All data stays in one SQLite file. No cloud, no telemetry. The AI runs locally when possible, falls back to API calls when needed. Your notifications never leave your machine.",
      },
    ],
    challenges: [
      {
        problem: "Notification overload across multiple platforms",
        solution:
          "Pulse aggregates, deduplicates, and prioritizes. The AI reads everything so you don't have to. You get a summary, not a badge count.",
      },
    ],
    metrics: {
      stars: "1+",
      deps: "0",
    },
  },
];
