import { renderLayout } from './layout.js';
import { assetUrl } from '../lib/asset-base-url.js';

const ASSETS = {
  logo: assetUrl('code-logo.png'),
  divider: assetUrl('code-divider.png'),
  chipIcon: assetUrl('code-chip-icon.png'),
  linkedin: assetUrl('code-linkedin.png'),
  x: assetUrl('code-x.png'),
  decor: assetUrl('code-decor.png')
};

function renderFooter() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding-top:40px;">
      <tr>
        <td style="padding-bottom:24px;">
          <div class="email-divider-line" style="width:496px;"></div>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:12px;">
          <p class="email-caption email-secondary">
            Puedes ponerte en contacto con nuestro equipo de atención al cliente, disponible 24/7.
            Escríbenos a través del chat en vivo en la parte inferior de
            <a class="email-link" href="https://mercuryo.io">mercuryo.io</a>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding-bottom:20px;">
          <p class="email-caption email-secondary">
            ¿Demasiadas notificaciones?
            <a class="email-link" href="https://mercuryo.io">Cuéntanos tu opinión</a>
            <a class="email-link" href="https://mercuryo.io" style="color:#344dcf;"> para ayudarnos a mejorarlas</a>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="email-chip" style="padding:4px 12px 4px 4px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right:6px;">
                      <img src="${ASSETS.chipIcon}" alt="" width="20" height="20" style="display:block;" />
                    </td>
                    <td class="email-caption email-chip-text">Mercuryo.io</td>
                  </tr>
                </table>
              </td>
              <td style="width:6px;"></td>
              <td class="email-chip email-chip-text email-caption" style="padding:8px 12px;">Centro de aprendizaje</td>
              <td style="width:6px;"></td>
              <td><img src="${ASSETS.linkedin}" alt="LinkedIn" width="28" height="28" style="display:block;" /></td>
              <td style="width:6px;"></td>
              <td><img src="${ASSETS.x}" alt="X" width="29" height="28" style="display:block;" /></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function renderDesktop(code) {
  return `
    <table role="presentation" width="532" cellpadding="0" cellspacing="0" border="0" class="email-root email-card email-shell" style="width:532px; background-color:#ffffff; background-image:url('${ASSETS.decor}'); background-repeat:no-repeat; background-position:right -95px top -96px; background-size:360px 360px; border-radius:24px; overflow:hidden;">
        <tr>
          <td class="email-inner">
            <table role="presentation" width="460" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-top:24px; padding-bottom:56px;">
                  <img src="${ASSETS.logo}" alt="mercuryo" width="114" height="16" style="display:block;" />
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:12px;" class="email-title">Authentication code</td>
              </tr>
              <tr>
                <td style="padding-top:4px; padding-bottom:8px;" class="email-text email-primary">Your authentication code is:</td>
              </tr>
              <tr>
                <td style="padding-bottom:16px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="email-surface" style="border-radius:28px;">
                    <tr>
                      <td style="padding:20px 40px;">
                        <div style="font-family: Arial, sans-serif; font-size:48px; line-height:48px; font-weight:600; color:#171513;">${code}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:4px; padding-bottom:12px;" class="email-text email-primary">If you did not make any requests, just ignore this email</td>
              </tr>
              <tr>
                <td style="padding-top:4px;" class="email-text email-primary">Regards,<br />Mercuryo Team</td>
              </tr>
              <tr>
                <td>${renderFooter()}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
  `;
}

export function renderCodeEmail({ code = '65328' } = {}) {
  return {
    html: renderLayout({
      title: 'Authentication code',
      previewText: `Your authentication code is ${code}.`,
      body: renderDesktop(code)
    }),
    attachments: []
  };
}
