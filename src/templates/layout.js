function renderDarkModeStyles() {
  return `
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #111111 !important;
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

      .email-shell {
        background-color: #111111 !important;
      }

      .email-divider,
      .email-rule {
        border-color: rgba(245, 239, 233, 0.12) !important;
      }

      .email-divider-line {
        background-color: rgba(245, 239, 233, 0.12) !important;
      }

      .email-link {
        color: #8ea7ff !important;
      }

      .email-button {
        background-color: #00b478 !important;
        color: #ffffff !important;
      }

      .email-code-value {
        color: #f5efe9 !important;
        -webkit-text-fill-color: #f5efe9 !important;
      }

      .email-code-logo-light,
      .email-logo-light-row {
        display: none !important;
      }

      .email-code-logo-dark,
      .email-logo-dark-row {
        display: block !important;
      }

      .email-logo,
      .email-logo-light-row {
        display: none !important;
      }

      .email-logo-dark,
      .email-logo-dark-row {
        display: block !important;
      }

      .email-social-icon {
        display: block !important;
      }

      .email-trustpilot-label {
        color: #f5efe9 !important;
      }

      .email-social-link {
        background-color: #2a2521 !important;
      }

      .email-social-chip {
        background-color: #2a2521 !important;
      }

    }

    [data-ogsc] body {
      background-color: #111111 !important;
    }

    [data-ogsc] .email-primary,
    [data-ogsc] .email-title,
    [data-ogsc] .email-text {
      color: #f5efe9 !important;
    }

    [data-ogsc] .email-secondary {
      color: #d0c6bd !important;
    }

    [data-ogsc] .email-surface,
    [data-ogsc] .email-chip {
      background-color: #2a2521 !important;
    }

    [data-ogsc] .email-shell {
      background-color: #111111 !important;
    }

    [data-ogsc] .email-divider,
    [data-ogsc] .email-rule {
      border-color: rgba(245, 239, 233, 0.12) !important;
    }

    [data-ogsc] .email-divider-line {
      background-color: rgba(245, 239, 233, 0.12) !important;
    }

    [data-ogsc] .email-link {
      color: #8ea7ff !important;
    }

    [data-ogsc] .email-code-value {
      color: #f5efe9 !important;
      -webkit-text-fill-color: #f5efe9 !important;
    }

    [data-ogsc] .email-code-logo-light,
    [data-ogsc] .email-logo-light-row {
      display: none !important;
    }

    [data-ogsc] .email-code-logo-dark,
    [data-ogsc] .email-logo-dark-row {
      display: block !important;
    }

    [data-ogsc] .email-logo,
    [data-ogsc] .email-logo-light-row {
      display: none !important;
    }

    [data-ogsc] .email-logo-dark,
    [data-ogsc] .email-logo-dark-row {
      display: block !important;
    }

    [data-ogsc] .email-social-icon {
      display: block !important;
    }

    [data-ogsc] .email-trustpilot-label {
      color: #f5efe9 !important;
    }

    [data-ogsc] .email-social-link {
      background-color: #2a2521 !important;
    }

    [data-ogsc] .email-social-chip {
      background-color: #2a2521 !important;
    }

  `;
}

export function renderLayout({ title, previewText, body }) {
  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title>${title}</title>
    <style>
      html,
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        min-width: 100% !important;
      }

      body {
        background-color: #ffffff;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      td {
        padding: 0;
      }

      img {
        border: 0;
        display: block;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }

      p {
        margin: 0;
      }

      .email-preheader {
        display: none !important;
        max-height: 0 !important;
        max-width: 0 !important;
        opacity: 0 !important;
        overflow: hidden !important;
        mso-hide: all !important;
      }

      .email-card {
        width: 532px;
        border-radius: 24px;
      }

      .email-shell {
        background-color: transparent;
      }

      .email-content-table {
        width: 460px;
      }

      .email-order-shell {
        width: 420px;
      }

      .email-order-content {
        width: 356px;
      }

      .email-inner {
        padding: 0 56px 64px 16px;
      }

      .email-inner-mobile {
        padding: 0 16px 64px 16px;
      }

      .email-title {
        font-family: Arial, sans-serif;
        font-size: 24px;
        line-height: 29px;
        font-weight: 500;
        color: #171513;
      }

      .email-text {
        font-family: Arial, sans-serif;
        font-size: 15px;
        line-height: 22px;
        color: #171513;
      }

      .email-caption {
        font-family: Arial, sans-serif;
        font-size: 13px;
        line-height: 15px;
      }

      .email-primary {
        color: #171513;
      }

      .email-secondary {
        color: #707070;
      }

      .email-chip-text {
        color: #5f5a55;
      }

      .email-link {
        color: #2e52d1;
        text-decoration: none;
      }

      .email-surface {
        background-color: #f2ede8;
      }

      .email-chip {
        background-color: #eee7e0;
        border-radius: 24px;
      }

      .email-divider {
        border-top: 1px solid #d6cec5;
      }

      .email-divider-line {
        height: 1px;
        background-color: rgba(95, 90, 85, 0.22);
      }

      .email-rule {
        border-top: 1px solid rgba(95, 90, 85, 0.12);
      }

      .email-button {
        display: inline-block;
        padding: 10px 21px 11px 21px;
        background-color: #00b478;
        border-radius: 12px;
        color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 13px;
        line-height: 15px;
        font-weight: 700;
        text-decoration: none;
      }

      .email-code-value {
        color: #171513;
        -webkit-text-fill-color: #171513;
      }

      .mobile-only {
        display: none;
        max-height: 0;
        overflow: hidden;
      }

      .email-logo {
        display: block;
        width: 113.702px !important;
        height: 16px !important;
      }

      .email-code-logo-dark {
        display: none;
        width: 113.702px !important;
        height: 16px !important;
      }

      .email-logo-dark {
        display: none;
        width: 113.702px !important;
        height: 16px !important;
      }

      .email-logo-dark-row {
        display: none;
        max-height: 0;
        overflow: hidden;
        mso-hide: all;
      }

      .email-trustpilot-shell {
        display: inline-block;
      }

      .email-trustpilot-label {
        color: #191919;
      }

      .email-social-link {
        display: inline-block;
        width: 29px;
        height: 28px;
        text-decoration: none;
        line-height: 28px;
        text-align: center;
        font-size: 0;
      }

      .email-social-chip {
        background-color: #eee7e0;
        border-radius: 14px;
      }

      ${renderDarkModeStyles()}

      @media screen and (max-width: 600px) {
        .desktop-only {
          display: none !important;
          max-height: 0 !important;
          overflow: hidden !important;
        }

        .mobile-only {
          display: table !important;
          max-height: none !important;
          overflow: visible !important;
        }

        .email-card {
          width: 390px !important;
        }

        .email-page-pad {
          padding: 0 !important;
        }

        .email-content-table,
        .email-order-shell,
        .email-order-content {
          width: 100% !important;
        }

        .email-inner {
          padding: 0 16px 64px 16px !important;
        }

        .mobile-stack,
        .mobile-stack td {
          display: block !important;
          width: 100% !important;
          text-align: left !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-preheader">${previewText || title}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" class="email-page-pad" style="padding:0 16px;">
          ${body}
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
