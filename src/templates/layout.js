function renderDarkModeStyles() {
  return `
    @media (prefers-color-scheme: dark) {
      body,
      .email-page {
        background-color: #111111 !important;
      }

      .email-shell {
        background-color: #181614 !important;
      }

      .email-text,
      .email-text a,
      .email-title,
      .email-primary {
        color: #f5efe9 !important;
      }

      .email-muted {
        color: #d0c6bd !important;
      }

      .email-surface,
      .email-chip {
        background-color: #2a2521 !important;
      }

      .email-divider,
      .email-rule {
        border-color: #4d443d !important;
      }

      .email-link {
        color: #8ea7ff !important;
      }

      .email-button {
        background-color: #10b981 !important;
        color: #ffffff !important;
      }
    }

    [data-ogsc] .email-page,
    [data-ogsc] body {
      background-color: #111111 !important;
    }

    [data-ogsc] .email-shell {
      background-color: #181614 !important;
    }

    [data-ogsc] .email-text,
    [data-ogsc] .email-title,
    [data-ogsc] .email-primary {
      color: #f5efe9 !important;
    }

    [data-ogsc] .email-muted {
      color: #d0c6bd !important;
    }

    [data-ogsc] .email-surface,
    [data-ogsc] .email-chip {
      background-color: #2a2521 !important;
    }

    [data-ogsc] .email-divider,
    [data-ogsc] .email-rule {
      border-color: #4d443d !important;
    }

    [data-ogsc] .email-link {
      color: #8ea7ff !important;
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
        min-width: 100% !important;
        width: 100% !important;
        height: 100% !important;
      }

      body {
        background-color: #efefef;
      }

      table {
        border-spacing: 0;
        border-collapse: collapse;
      }

      td {
        padding: 0;
      }

      img {
        border: 0;
        display: block;
        line-height: 100%;
        max-width: 100%;
        outline: none;
        text-decoration: none;
      }

      p {
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      .email-page {
        background-color: #efefef;
        padding: 24px 12px;
      }

      .email-shell {
        width: 100%;
        max-width: 532px;
        background-color: #fcfaf8;
        border-radius: 24px;
      }

      .email-inner {
        padding: 24px 16px 64px;
      }

      .email-logo {
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 22px;
        line-height: 1;
        color: #171513;
        padding-bottom: 56px;
      }

      .email-title {
        font-family: Arial, sans-serif;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
        color: #171513;
      }

      .email-text {
        font-family: Arial, sans-serif;
        font-size: 15px;
        line-height: 22px;
        color: #171513;
      }

      .email-muted {
        color: #5f5a55;
      }

      .email-primary {
        color: #171513;
      }

      .email-link {
        color: #2e52d1;
      }

      .email-surface {
        background-color: #f2ede8;
        border-radius: 24px;
      }

      .email-divider {
        border-top: 1px solid #d6cec5;
      }

      .email-chip {
        background-color: #eee7e0;
        border-radius: 24px;
      }

      .email-button {
        background-color: #10b981;
        border-radius: 16px;
        color: #ffffff;
        display: inline-block;
        font-family: Arial, sans-serif;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        padding: 14px 24px;
      }

      .email-preheader {
        display: none;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
      }

      .stack-column,
      .stack-column-cell {
        display: table-cell;
      }

      ${renderDarkModeStyles()}

      @media screen and (max-width: 600px) {
        .email-page {
          padding: 0 !important;
        }

        .email-shell {
          border-radius: 24px !important;
        }

        .email-inner {
          padding: 32px 16px 64px !important;
        }

        .fluid {
          width: 100% !important;
          max-width: 100% !important;
        }

        .stack-column,
        .stack-column-cell {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
        }

        .mobile-center {
          text-align: center !important;
        }

        .mobile-left {
          text-align: left !important;
        }

        .mobile-padding-reset {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-preheader">${previewText || title}</div>
    <table role="presentation" width="100%" class="email-page" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" class="email-shell" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="email-inner">
                ${body}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
