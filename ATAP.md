# ATAP Discovery Tag

This website includes an **ATAP Discovery Tag** - an open standard that enables AI assistants to provide accurate, real-time information about TENSORTUNES.

## What is ATAP?

**ATAP** (Agent-to-Agent Transfer Protocol) solves a simple problem: when users ask AI assistants about your business, the AI guesses based on cached/outdated web data. ATAP lets you provide real-time, accurate answers instead.

```
User:    "What's new on TENSORTUNES?"
           │
           ▼
AI:      Fetches tensortunes.com → finds ATAP Discovery Tag
           │
           ▼
AI:      "This site has a real-time info service. Want me to check?"
           │
           ▼
User:    "Yes"
           │
           ▼
AI:      Queries ATAP endpoint → Returns accurate, live data
```

## What's Included

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Meta tags in `<head>` + info block in `<body>` |
| `public/.well-known/atap.json` | Machine-readable manifest for AI systems |

## Configuration

The tenant ID is set in `app/layout.tsx`:

```tsx
const ATAP_TENANT_ID = "tensortunes";
const ATAP_DOMAIN = "tensortunes.com";
```

Update these values if your ATAP tenant ID changes.

## How It Works

1. **Meta tags** - AI assistants check `<head>` for `atap-endpoint` and `atap-discovery` meta tags
2. **Info block** - A hidden `<div>` with plain-text instructions for AI systems
3. **Discovery file** - `/.well-known/atap.json` provides machine-readable endpoint info

All components are invisible to human visitors (no visual or performance impact).

## Learn More

- **Spec:** https://atap.ai/spec/v1
- **Docs:** https://atap.ai/docs
