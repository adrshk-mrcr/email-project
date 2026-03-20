import { renderLayout } from './layout.js';
import { assetUrl } from '../lib/asset-base-url.js';

const ASSETS = {
  logo: assetUrl('table-logo.png'),
  divider: assetUrl('table-divider.png'),
  chipIcon: assetUrl('table-chip-icon.png'),
  linkedin: assetUrl('table-linkedin.png'),
  x: assetUrl('table-x.png'),
  decor: assetUrl('table-decor.png'),
  trustpilotLogo: assetUrl('table-trustpilot-logo.png'),
  trustpilotRating: assetUrl('table-trustpilot-rating.png')
};

function renderFooter() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding-top:40px;">
      <tr>
        <td style="padding-bottom:24px;">
          <img src="${ASSETS.divider}" alt="" width="460" style="display:block; width:460px; max-width:none;" />
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

function renderDesktop() {
  return `
    <div style="width:532px; background-color:#ffffff; background-image:url('${ASSETS.decor}'); background-repeat:no-repeat; background-position:right -95px top -96px; background-size:360px 360px; border-radius:24px; overflow:hidden;">
      <table role="presentation" width="532" cellpadding="0" cellspacing="0" border="0" class="email-root email-card" style="background-color:transparent;">
        <tr>
          <td class="email-inner">
            <table role="presentation" width="460" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-top:24px; padding-bottom:56px;">
                  <img src="${ASSETS.logo}" alt="mercuryo" width="114" height="16" style="display:block;" />
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
                            <td class="email-text email-chip-text" style="padding:8px 0; border-top:1px solid #e5e5e5;">Fee</td>
                            <td class="email-text email-primary" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px; border-top:1px solid #e5e5e5;">€34.21</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text" style="padding:8px 0;">Total</td>
                            <td class="email-text email-primary" style="padding:8px 0; text-align:right; font-size:16px; line-height:24px;">€903.12</td>
                          </tr>
                          <tr>
                            <td class="email-text email-chip-text" style="padding:8px 0; border-top:1px solid #e5e5e5;">To</td>
                            <td class="email-caption email-primary" style="padding:8px 0; text-align:right; border-top:1px solid #e5e5e5;">BTC wallet: 1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx</td>
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
                <td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding-right:8px;">
                        <img src="${ASSETS.trustpilotLogo}" alt="Trustpilot" width="83" height="20" style="display:block;" />
                      </td>
                      <td>
                        <img src="${ASSETS.trustpilotRating}" alt="" width="88" height="17" style="display:block;" />
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
    </div>
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
