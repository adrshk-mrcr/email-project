import { renderTableEmail } from '../templates/table-email.js';

const DARK_PREVIEW_STYLE = `
  <style>
    body,
    .email-root {
      background-color: #111111 !important;
    }

    .email-card {
      background-color: #181614 !important;
    }

    .email-primary,
    .email-primary a,
    .email-title,
    .email-text {
      color: #f5efe9 !important;
    }

    .email-secondary {
      color: #d0c6bd !important;
    }

    .email-surface,
    .email-chip {
      background-color: #2a2521 !important;
    }

    .email-divider {
      border-color: #4d443d !important;
    }

    .email-link {
      color: #8ea7ff !important;
    }

    .email-button {
      background-color: #00b478 !important;
      color: #ffffff !important;
    }
  </style>
`;

export function getTablePreviewHtml({ dark = false } = {}) {
  const { html } = renderTableEmail();

  if (!dark) {
    return html;
  }

  return html.replace('</head>', `${DARK_PREVIEW_STYLE}</head>`);
}
