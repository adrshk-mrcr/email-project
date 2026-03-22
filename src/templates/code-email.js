import { renderLayout } from './layout.js';
import { assetUrl } from '../lib/asset-base-url.js';

const ASSETS = {
  logo: assetUrl('code-logo.png'),
  logoDark: assetUrl('table-logo-dark.png'),
  chipIcon: assetUrl('merc-foote.png'),
  linkedin: assetUrl('in-footer.png'),
  x: assetUrl('X-footer.png'),
  decor: assetUrl('Star.png')
};

function renderFooter({ dividerWidth }) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td height="40" style="height:40px; line-height:40px; font-size:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="padding-bottom:24px;">
          <div class="email-divider-line" style="width:${dividerWidth};"></div>
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
              <td class="email-chip" bgcolor="#eee7e0" style="padding:4px 12px 4px 4px; background-color:#eee7e0; border-radius:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right:6px;">
                      <img src="${ASSETS.chipIcon}" alt="" width="20" height="20" style="display:block; width:20px; height:20px;" />
                    </td>
                    <td class="email-caption email-chip-text">Mercuryo.io</td>
                  </tr>
                </table>
              </td>
              <td style="width:6px;"></td>
              <td class="email-chip email-chip-text email-caption" bgcolor="#eee7e0" style="padding:8px 12px; background-color:#eee7e0; border-radius:24px;">Centro de aprendizaje</td>
              <td style="width:6px;"></td>
              <td class="email-social-chip" bgcolor="#eee7e0" style="width:28px; height:28px; background-color:#eee7e0; border-radius:14px; text-align:center;">
                <a href="https://www.linkedin.com/company/mercuryo/" class="email-social-link" aria-label="LinkedIn" style="display:inline-block; width:28px; height:28px; text-decoration:none; line-height:28px;">
                  <img src="${ASSETS.linkedin}" alt="LinkedIn" width="14" height="14" style="display:block; width:14px; height:14px; margin:7px auto;" />
                </a>
              </td>
              <td style="width:6px;"></td>
              <td class="email-social-chip" bgcolor="#eee7e0" style="width:31px; height:28px; background-color:#eee7e0; border-radius:14px; text-align:center;">
                <a href="https://x.com/Mercuryo_io" class="email-social-link" aria-label="X" style="display:inline-block; width:31px; height:28px; text-decoration:none; line-height:28px;">
                  <img src="${ASSETS.x}" alt="X" width="15.5" height="14" style="display:block; width:15.5px; height:14px; margin:7px auto;" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function renderDesktop(code) {
  return `
    <table role="presentation" width="532" cellpadding="0" cellspacing="0" border="0" class="email-root email-card email-shell desktop-only" style="width:532px; background-image:url('${ASSETS.decor}'); background-repeat:no-repeat; background-position:right -6px top 2px; background-size:305px 305px; border-radius:24px; overflow:hidden;">
        <tr>
          <td class="email-inner">
            <table role="presentation" width="460" cellpadding="0" cellspacing="0" border="0" class="email-content-table">
              <tr>
                <td style="padding-top:24px; padding-bottom:56px;">
                  <img src="${ASSETS.logo}" alt="mercuryo" width="114" height="16" class="email-logo email-code-logo-light" style="display:block;" />
                  <img src="${ASSETS.logoDark}" alt="mercuryo" width="114" height="16" class="email-code-logo-dark" style="display:none; max-height:0; max-width:0; overflow:hidden; mso-hide:all;" />
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
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="email-surface" bgcolor="#f2ede8" style="background-color:#f2ede8; border-radius:28px;">
                    <tr>
                      <td style="padding:20px 40px;">
                        <div class="email-code-value" style="font-family: Arial, sans-serif; font-size:48px; line-height:48px; font-weight:600; color:#171513; -webkit-text-fill-color:#171513;">${code}</div>
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
                <td>${renderFooter({ dividerWidth: 496 })}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
  `;
}

function renderMobile(code) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-root email-card email-shell mobile-only" style="width:100%; max-width:390px; background-image:url('${ASSETS.decor}'); background-repeat:no-repeat; background-position:right -145px top -47px; background-size:214px 214px; border-radius:24px; overflow:hidden;">
      <tr>
        <td class="email-inner email-inner-mobile">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-content-table" style="width:100%;">
            <tr>
              <td style="padding-top:32px; padding-bottom:56px;">
                <img src="${ASSETS.logo}" alt="mercuryo" width="114" height="16" class="email-logo email-code-logo-light" style="display:block;" />
                <img src="${ASSETS.logoDark}" alt="mercuryo" width="114" height="16" class="email-code-logo-dark" style="display:none; max-height:0; max-width:0; overflow:hidden; mso-hide:all;" />
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
                <table role="presentation" width="231" cellpadding="0" cellspacing="0" border="0" class="email-surface" bgcolor="#f2ede8" style="width:231px; background-color:#f2ede8; border-radius:28px;">
                  <tr>
                    <td style="padding:16px 40px;">
                      <div class="email-code-value" style="font-family: Arial, sans-serif; font-size:48px; line-height:48px; font-weight:600; color:#171513; -webkit-text-fill-color:#171513;">${code}</div>
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
              <td>${renderFooter({ dividerWidth: '100%' })}</td>
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
      body: `${renderDesktop(code)}${renderMobile(code)}`
    }),
    attachments: []
  };
}
