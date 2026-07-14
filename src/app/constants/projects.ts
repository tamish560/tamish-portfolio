export const PROJECTS = [
  {
    name: "Relay",
    tagline: "Go MCP server with 40 tools across 7 categories.",
    overview:
      "Relay is a Model Context Protocol server written in Go that gives AI agents 40 tools across filesystem, web, search, code, git, system, and utility categories. It works with any MCP-compatible client and ships as a single binary or npm package.",
    description:
      "A Go-based MCP server providing 40 tools for AI coding agents. Includes filesystem operations, web fetching and search, code analysis, git operations, system commands, and utility functions. Designed to be boring tech on purpose: Go stdlib, no frameworks, single binary, MIT licensed.",
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
      "Single Go binary, zero runtime dependencies",
      "Available on npm as userelay",
      "Works with any MCP-compatible client",
      "Doctor command for environment diagnostics",
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
      stars: "6+",
      loadTime: "< 1s",
      tools: "40",
      categories: "7",
    },
  },
  {
    name: "Reflow",
    tagline: "SSR-safe responsive toolkit working across 8 frameworks.",
    overview:
      "Reflow is a TypeScript responsive layout toolkit that works across React, Vue, Svelte, Solid, Angular, Preact, Qwik, and vanilla JS. SSR-safe with no hydration mismatch issues.",
    description:
      "A framework-agnostic responsive toolkit that provides hooks, composables, and utilities for building responsive UIs. Ships with 8 framework adapters so you use the same API everywhere. SSR-safe, tree-shakeable, zero runtime dependencies.",
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
      "Tree-shakeable, zero runtime dependencies",
      "Available on npm as reflow",
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
      stars: "4+",
      adapters: "8",
      downloads: "1.3.0",
    },
  },
  {
    name: "Observer",
    tagline: "Security-first MCP observability proxy with SQLite.",
    overview:
      "Observer is a transparent stdio proxy for MCP servers that logs every tool call to local SQLite. It traces tool name, timestamp, duration, error status, and SHA-256 hash by default, with raw payloads behind an explicit opt-in.",
    description:
      "A Go-based MCP proxy that sits between an AI agent and its MCP server, logging every tool call to a local SQLite database. Security-hardened: metadata-only traces by default, 0600 DB permissions, session-scoped queries, configurable redaction, and raw payload access behind an explicit environment variable.",
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
      "Metadata-only traces by default (tool name, timing, hash, status)",
      "Raw payload opt-in via OBSERVER_RAW_PAYLOAD=1",
      "Configurable redaction with OBSERVER_REDACT_PATTERNS",
      "Session-scoped queries prevent cross-session data leakage",
      "0600 database file permissions",
      "trace.history, trace.search, trace.stats as MCP tools for agent self-introspection",
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
      stars: "0+",
      security: "Hardened",
    },
  },
];
