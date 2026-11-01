# LearnAva — Engineering Case Study

## Overview

LearnAva is a Persian-first German-learning and exam-preparation product. It joins a Flutter client to modular FastAPI services and applies AI-assisted capabilities inside tested learner workflows.

## Problem / Product Goal

Create a useful learning experience spanning identity, speaking practice, exam preparation, protected generated media, and progress-oriented interactions across a maintainable client/service boundary.

## My Role

Product builder and cross-stack engineer: requirements, architecture, implementation coordination, integration, debugging, and validation.

## What I Built / Worked On

- Flutter flows for onboarding, authentication, speaking practice, and exam preparation.
- FastAPI modules for identity, billing, speaking conversations, and exam-preparation packs.
- Authenticated REST integration and protected learner audio delivery.
- Quality-gated multi-speaker exam audio and AI-assisted practice workflows.

## Architecture

Feature-oriented Flutter modules call authenticated FastAPI endpoints. Backend capabilities are separated into presentation, application, domain, and infrastructure concerns where the feature warrants them; external AI and media services stay behind gateways.

## Technology

Flutter, Dart, Python, FastAPI, REST/JSON, Docker Compose, automated tests, and LLM/media integrations.

## Engineering Challenges

- Keeping client and backend behavior aligned while both evolve.
- Authorizing media delivery and rejecting generated audio that fails quality checks.
- Turning exam requirements into reusable, testable workflows.
- Debugging failures across UI, networking, services, persistence, and providers.

## Key Decisions

- Organize around product capabilities rather than one large application layer.
- Treat generated media as a verified artifact, not an assumed-success provider response.
- Protect learner delivery with ownership checks and authenticated calls.
- Use AI-assisted implementation with explicit human review and tests.

## Verification / Testing

Tests cover identity/session flows, conversations, exam packs, billing contracts, ownership-protected audio, media rejection/regeneration, and health behavior. Client/service behavior is also validated through integration debugging.

## Skills Demonstrated

Flutter product development, Python/FastAPI engineering, authentication, API integration, protected media delivery, automated testing, debugging, and cross-stack delivery.

## Current Engineering Focus

Strengthening exam-oriented learning workflows, media quality, and end-to-end learner-journey reliability.

## What I Can Demonstrate in an Interview

A selected learner flow, the client/service boundary, sanitized test and debugging examples, and the trade-offs behind AI-assisted learning workflows.

## IP / Source Access

The implementation remains private to protect product IP, prompts, content, user data, and reusable logic. A live walkthrough, architecture discussion, screen sharing, and narrowly scoped sanitized excerpts are available during an interview.

<!-- SHOWCASE-AUTO:START -->
## Current public status

**Status:** Active development
**Current milestone:** Validated exam audio and exam-preparation workflows

Public status is updated from an allowlisted metadata contract.

### Highlights

- Cross-stack Flutter and FastAPI product development.

### Public verification

- Private implementation and data are excluded.

### Recent updates

<!-- SHOWCASE-AUTO:END -->
