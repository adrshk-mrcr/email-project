import { renderLayout } from './layout.js';
import { assetUrl } from '../lib/asset-base-url.js';

const ASSETS = {
  logo: assetUrl('table-logo.png'),
  divider: assetUrl('table-divider.png'),
  chipIcon: assetUrl('table-chip-icon.png?v=2'),
  linkedin: assetUrl('table-linkedin-glyph.png?v=3'),
  x: assetUrl('table-x-glyph.png?v=3'),
  decor: assetUrl('table-decor.png'),
  trustpilotRating: assetUrl('table-trustpilot-rating-raw.png?v=2'),
  trustpilotStar: assetUrl('trustpilot-star-only.png?v=2')
};

function renderFooter() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-bottom:24px;">
          <div class="email-divider-line" style="width:460px;"></div>
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
              <td>
                <a href="https://www.linkedin.com/company/mercuryo/" class="email-social-link" aria-label="LinkedIn">
                  <img src="${ASSETS.linkedin}" alt="LinkedIn" width="28" height="28" class="email-social-icon" style="display:block;" />
                </a>
              </td>
              <td style="width:6px;"></td>
              <td>
                <a href="https://x.com/Mercuryo_io" class="email-social-link" aria-label="X">
                  <img src="${ASSETS.x}" alt="X" width="29" height="28" class="email-social-icon" style="display:block;" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function renderDesktop() {
  return `
    <table role="presentation" width="532" cellpadding="0" cellspacing="0" border="0" class="email-root email-card email-shell" style="width:532px; border-radius:24px; overflow:hidden; background-color:#ffffff; background-image:url('${ASSETS.decor}'); background-repeat:no-repeat; background-position:right -95px top -96px; background-size:360px 360px;">
        <tr>
          <td class="email-inner">
            <table role="presentation" width="460" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-top:24px; padding-bottom:56px;">
                  <img src="${ASSETS.logo}" alt="mercuryo" width="114" height="16" class="email-logo" style="display:block;" />
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:12px;" class="email-title">Your wallet was topped up with BTC</td>
              </tr>
              <tr>
                <td style="padding-top:4px; padding-bottom:8px;" class="email-text email-primary">Mercuryo has sent 0.0002 BTC + 50.00 USD to your wallet.</td>
              </tr>
              <tr>
                <td style="padding-top:24px; padding-bottom:32px; padding-right:40px;">
                  <table role="presentation" width="420" cellpadding="0" cellspacing="0" border="0" class="email-surface" style="border-radius:24px;">
                    <tr>
                      <td style="padding:24px 32px 20px;">
                        <table role="presentation" width="356" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td class="email-secondary" style="font-family:Arial,sans-serif; font-size:17px; line-height:17px; font-weight:600; padding-bottom:24px;">Your order</td>
                            <td class="email-secondary" style="font-family:Arial,sans-serif; font-size:16px; line-height:16px; text-align:right; padding-bottom:24px;">12 Mar 2020, 13:15</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text" style="padding:8px 0;">Amount</td>
                            <td class="email-text email-primary" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px;">1.50744474 BTC</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text email-rule" style="padding:8px 0;">Fee</td>
                            <td class="email-text email-primary email-rule" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px;">€34.21</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text" style="padding:8px 0;">Total</td>
                            <td class="email-text email-primary" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px;">€903.12</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text email-rule" style="padding:8px 0;">To</td>
                            <td class="email-caption email-primary email-rule" style="padding:8px 0; text-align:right;">BTC wallet: 1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text" style="padding:8px 0;">Mercuryo ID:</td>
                            <td class="email-text email-primary" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px;">5d35ghuafg9345x34</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="email-text email-primary" style="padding-top:4px; padding-bottom:8px;">The coins will be accrued immediately after 6 confirmations in Bitcoin network.</td>
              </tr>
              <tr>
                <td style="padding-top:32px; padding-bottom:12px;" class="email-caption email-primary">Did you enjoy Mercuryo?</td>
              </tr>
              <tr>
                <td style="padding-bottom:8px;"><a href="https://mercuryo.io" class="email-button">Share your expirience</a></td>
              </tr>
              <tr>
                <td style="padding-bottom:40px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="email-trustpilot-shell">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-right:3px;">
                              <img src="${ASSETS.trustpilotStar}" alt="" width="20" height="20" style="display:block; width:20px; height:20px;" />
                            </td>
                            <td class="email-trustpilot-label" style="padding-right:8px; font-family:Arial,sans-serif; font-size:13px; line-height:15px; font-weight:700; white-space:nowrap;">
                              Trustpilot
                            </td>
                            <td>
                              <img src="${ASSETS.trustpilotRating}" alt="Trustpilot rating" width="88" height="16" style="display:block; width:88px; height:16px; opacity:0.8;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
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

export function renderTableEmail() {
  return {
    html: renderLayout({
      title: 'Your wallet was topped up with BTC',
      previewText: 'Mercuryo has sent 0.0002 BTC + 50.00 USD to your wallet.',
      body: renderDesktop()
    }),
    attachments: []
  };
}
