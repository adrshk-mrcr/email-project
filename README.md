# Email Project

Minimal email project for two transactional templates and Resend test sends.

## Setup

1. Update `.env` with a valid `RESEND_API_KEY`.
2. Optionally change `EMAIL_FROM`.
3. Optionally set `RECIPIENTS` as a comma-separated list.
3. Run:

```bash
cd email-project
node src/render-previews.js
node src/send-test.js
```

## Preview

Build local HTML previews:

```bash
cd email-project
npm run preview:build
```

This will generate:

- `previews/code-email.html`
- `previews/table-email.html`

## Send Tests

Send both templates with:

```bash
cd email-project
node src/send-test.js
```

To override recipients for a one-off test:

```bash
cd email-project
RECIPIENTS=a.shakirov@mercuryo.io node src/send-test.js
```

## Dark Mode

The templates include:

- `meta name="color-scheme" content="light dark"`
- `meta name="supported-color-schemes" content="light dark"`
- `@media (prefers-color-scheme: dark)` styles
- `[data-ogsc]` overrides for Outlook dark mode behavior

This means compatible clients can switch to the dark palette when system dark mode is enabled, while the base light version remains resilient in clients that force their own color inversion.

## Mobile

The templates use a mobile-safe single-column shell plus email media queries for narrow screens.
The mobile version should render correctly in Apple Mail, Gmail mobile, and most modern clients, with graceful fallback in stricter Outlook environments.

## GitHub Repo

The folder is already initialized as a standalone git repository, so it can be pushed to a separate GitHub repository as soon as a remote is available.

## Notes

- `.env` is gitignored.
- The default sender `onboarding@resend.dev` is suitable for initial Resend tests.
- Production sending should use a verified domain.
- Resend sandbox mode still restricts external recipients until a domain is verified.
