# AI Company / Extera — Engineering Case Study

## Overview

AI Company / Extera is a multi-agent AI platform designed around controlled execution, provider routing, persistent state, approvals, memory boundaries, and verifiable outcomes.

## Problem / Product Goal

Coordinate AI-assisted work across product contexts without losing control of execution, state, security boundaries, or the ability to explain what happened.

## My Role

System designer and implementing engineer: decomposing the platform, defining boundaries, implementing runtime capabilities, and validating integration behavior.

## What I Built / Worked On

- Supervisor, agent registry, and capability-oriented task intake.
- Policy-owned model routing with direct/agent lanes, escalation, and validation.
- Isolated execution coordination with scoped tokens, retries, and result persistence.
- Persistent tasks, approvals, recovery, eventing, and memory interfaces.

## Architecture

Task intent is separated from routing policy and provider execution. The runtime owns workflow state, approvals, and recovery; the execution layer isolates activity and verifies results. Routing, provider, memory, browser, and event capabilities remain separable integrations.

## Technology

Python, JavaScript, LLM provider APIs, policy routing, persistent state, event infrastructure, CLI tooling, and automated tests.

## Engineering Challenges

- Balancing useful agent autonomy with governed execution.
- Keeping provider selection policy-owned and observable.
- Recovering multi-step work without mixing product context.
- Mapping adapter/provider failures into stable runtime behavior.

## Key Decisions

- Separate task intent, routing policy, and provider execution.
- Require approval and scoped authorization at privileged boundaries.
- Persist state atomically and provide explicit recovery paths.
- Use events and structured attempt records as the base for auditability.

## Verification / Testing

Tests cover agent registration, task intake, execution, retries, recovery, routing contracts, adapters, memory, events, browser boundaries, scoped authorization, and persisted results.

## Skills Demonstrated

Multi-agent architecture, Python runtime engineering, model routing, approval-gated execution, persistent workflows, failure design, and automated verification.

## Current Engineering Focus

Production-grade observability, auditability, and execution tracing for a multi-agent AI platform.

## What I Can Demonstrate in an Interview

A task-to-execution architecture walkthrough, routing and escalation concepts, approvals and recovery, and a safe demo or sanitized failure scenario.

## IP / Source Access

Source, prompts, agent instructions, credentials, private memory, customer context, and reusable operating logic remain private. Architecture and selected safe runtime evidence are available during an interview.

<!-- SHOWCASE-AUTO:START -->
## Current public status

**Status:** Active development  
**Current milestone:** Phase 13C — Business Profile & Tenant Provisioning

A multi-agent AI operating platform with governed execution, tenant-safe experience identities, structured business profiles, controlled customer provisioning, integrity-gated activation, and end-to-end validation.

### Highlights

- Structured Business Profiles capture operational context without embedding tenant, execution, approval, or credential authority.
- Customer provisioning follows an explicit REQUESTED → VALIDATED → PROVISIONED → ACTIVE lifecycle with fail-closed failure states.
- The existing Customer Installer is reused through a service boundary with Business Profile persistence and backward compatibility for existing customer tenants.
- Tenant-integrity validation blocks activation when identity, isolation, scopes, policy, profile, or runtime roots are inconsistent.
- Phase 13C closes with 92 independent provisioning tests and a 734-test platform regression baseline.

### Public verification

- Only allowlisted public metadata is published.
- Private source code, internal prompts, credentials, customer data, private memory, execution capabilities, and proprietary workflows are not exported.
- Provisioning state and business context do not grant execution or approval authority.

### Recent updates

- 2026-11-08: add jarvis commercial entitlement contract
- 2026-11-08: close business profile and tenant provisioning
- 2026-11-08: Private engineering update completed.
- 2026-11-08: gate customer activation on tenant integrity
- 2026-11-08: persist business profiles with legacy compatibility
- 2026-11-08: add customer installer provisioning service
- 2026-11-08: add provisioning request lifecycle
- 2026-11-08: add business profile provisioning contract
<!-- SHOWCASE-AUTO:END -->
