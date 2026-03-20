function renderDarkModeStyles() {
  return `
    @media (prefers-color-scheme: dark) {
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
    }

    [data-ogsc] body,
    [data-ogsc] .email-root {
      background-color: #111111 !important;
    }

    [data-ogsc] .email-card {
      background-color: #181614 !important;
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

    [data-ogsc] .email-divider {
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

      .email-root {
        background-color: #ffffff;
      }

      .email-card {
        width: 532px;
        background-color: #ffffff;
        border-radius: 24px;
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

      .mobile-only {
        display: none;
        max-height: 0;
        overflow: hidden;
      }

      ${renderDarkModeStyles()}

      @media screen and (max-width: 600px) {
        .desktop-only {
          display: none !important;
          max-height: 0 !important;
          overflow: hidden !important;
        }

        .mobile-only {
          display: block !important;
          max-height: none !important;
          overflow: visible !important;
        }

        .email-card {
          width: 390px !important;
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
    ${body}
  </body>
</html>`;
}
