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

The current templates do not use a separate “dark HTML” version. They use one email-safe structure plus a small set of dark-mode overrides that are already implemented in [`/Users/adrshk/projects/ Codex/email-project/src/templates/layout.js`](/Users/adrshk/projects/%20Codex/email-project/src/templates/layout.js).

Use this exact approach when moving the solution into real production templates.

### What is actually implemented

- Dark-mode opt-in is enabled with:
  - `meta name="color-scheme" content="light dark"`
  - `meta name="supported-color-schemes" content="light dark"`
- Dark colors are applied through:
  - `@media (prefers-color-scheme: dark)`
  - `[data-ogsc]` overrides for Outlook-family dark mode behavior
- The base structure stays table-based and color-critical blocks always get explicit colors.

### Real dark palette in use

- Page / shell background: `#111111`
- Surface cards and footer chips: `#2A2521`
- Primary text: `#F5EFE9`
- Secondary text: `#D0C6BD`
- Links: `#8EA7FF`
- Buttons: `#00B478`
- Button text: `#FFFFFF`
- Divider / inner rules: `rgba(245, 239, 233, 0.12)`

### Real implementation rules we use

- Keep the email layout table-based.
  - Do not rely on `flex` or `position:absolute` in the email HTML itself.

- Put dark colors on semantic roles, not on arbitrary nodes.
  - `.email-shell` gets the page background.
  - `.email-surface` and `.email-chip` get the dark surface fill.
  - `.email-primary`, `.email-title`, `.email-text` get the primary text color.
  - `.email-secondary` gets the secondary text color.
  - `.email-link` gets the dark-mode link color.
  - `.email-divider`, `.email-rule`, `.email-divider-line` get the dim divider color.

- Keep the button color stable.
  - The CTA stays `#00B478` in dark mode instead of being remapped to a different accent.

- Force the auth code text color explicitly.
  - `.email-code-value` uses both `color` and `-webkit-text-fill-color`.
  - This is important because Apple Mail can otherwise darken the digits inside the code card.

- Use explicit fills for chips and footer controls.
  - Footer pills and social chips switch to the same dark surface `#2A2521`.
  - Do not leave those backgrounds transparent in dark mode.

- Keep image handling simple.
  - We currently use one universal logo asset, not separate light/dark logo swaps.
  - Decorative and footer images stay as PNG assets; only surrounding colors are remapped by dark-mode CSS.

### What to carry into other templates

- Copy the dark-mode meta tags exactly.
- Copy the role-based class structure from `layout.js`.
- Reuse the same dark palette values unless a template has a deliberate visual exception.
- If a new template contains a highlighted numeric/token field like the auth code card, add the same `-webkit-text-fill-color` protection.
- If a template adds new pills, chips, or table dividers, map them to:
  - surface/chip background: `#2A2521`
  - divider: `rgba(245, 239, 233, 0.12)`
  - secondary text: `#D0C6BD`

### What not to do

- Do not rely on automatic client inversion for important text/background pairs.
- Do not leave dark-mode-critical elements on inherited text color.
- Do not introduce separate dark-only assets unless a specific client issue forces it.
- Do not add extra dark wrappers that paint over content blocks; dark mode should be applied at the same semantic layers as in `layout.js`.

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
