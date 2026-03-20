import { renderLayout } from './layout.js';

function renderFooter() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td class="email-divider" style="padding-top: 40px;"></td>
      </tr>
      <tr>
        <td style="padding-top: 24px;">
          <p class="email-text email-muted">
            Puedes ponerte en contacto con nuestro equipo de atención al cliente, disponible 24/7.
            Escríbenos a través del chat en vivo en la parte inferior de
            <a class="email-link" href="https://mercuryo.io">mercuryo.io</a>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding-top: 12px;">
          <p class="email-text email-muted">
            ¿Demasiadas notificaciones?
            <a class="email-link" href="https://mercuryo.io">Cuéntanos tu opinión para ayudarnos a mejorarlas</a>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding-top: 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td class="email-chip email-muted" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 15px; padding: 8px 12px;">Mercuryo.io</td>
              <td style="width: 6px;"></td>
              <td class="email-chip email-muted" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 15px; padding: 8px 12px;">Centro de aprendizaje</td>
              <td style="width: 6px;"></td>
              <td class="email-chip email-muted" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 15px; padding: 8px 12px;">LinkedIn</td>
              <td style="width: 6px;"></td>
              <td class="email-chip email-muted" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 15px; padding: 8px 12px;">X</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

function renderOrderRow({ label, value, bordered = false, compact = false }) {
  const borderStyle = bordered ? 'border-top: 1px solid #d6cec5;' : '';
  const valueStyle = compact
    ? 'font-size: 13px; line-height: 15px;'
    : 'font-size: 16px; line-height: 24px;';

  return `
    <tr>
      <td class="email-text email-muted stack-column-cell" style="padding: 8px 0; ${borderStyle}">${label}</td>
      <td class="email-text email-primary stack-column-cell mobile-left" style="padding: 8px 0; text-align: right; ${valueStyle} ${borderStyle}">${value}</td>
    </tr>
  `;
}

export function renderTableEmail() {
  return renderLayout({
    title: 'Your wallet was topped up with BTC',
    previewText: 'Mercuryo has sent 0.0002 BTC + 50.00 USD to your wallet.',
    body: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="email-logo">mercuryo</td>
        </tr>
        <tr>
          <td class="email-title" style="padding-bottom: 12px;">Your wallet was topped up with BTC</td>
        </tr>
        <tr>
          <td class="email-text email-primary" style="padding-bottom: 24px;">Mercuryo has sent 0.0002 BTC + 50.00 USD to your wallet.</td>
        </tr>
        <tr>
          <td style="padding-bottom: 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-surface">
              <tr>
                <td style="padding: 24px 16px 20px 16px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="email-muted stack-column-cell" style="font-family: Arial, sans-serif; font-size: 17px; line-height: 1; font-weight: 600; padding-bottom: 24px;">Your order</td>
                      <td class="email-muted stack-column-cell mobile-left" style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1; text-align: right; padding-bottom: 24px;">12 Mar 2020, 13:15</td>
                    </tr>
                    ${renderOrderRow({ label: 'Amount', value: '1.50744474 BTC' })}
                    ${renderOrderRow({ label: 'Fee', value: '€34.21', bordered: true })}
                    ${renderOrderRow({ label: 'Total', value: '€903.12' })}
                    ${renderOrderRow({ label: 'To', value: 'BTC wallet: 1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx', bordered: true, compact: true })}
                    ${renderOrderRow({ label: 'Mercuryo ID:', value: '5d35ghuafg9345x34' })}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="email-text email-primary">The coins will be accrued immediately after 6 confirmations in Bitcoin network.</td>
        </tr>
        <tr>
          <td style="padding-top: 32px; padding-bottom: 8px; font-family: Arial, sans-serif; font-size: 13px; line-height: 15px; font-weight: 700; color: #171513;">Did you enjoy Mercuryo?</td>
        </tr>
        <tr>
          <td style="padding-bottom: 12px;">
            <a href="https://mercuryo.io" class="email-button">Share your expirience</a>
          </td>
        </tr>
        <tr>
          <td class="email-text email-primary" style="font-size: 13px; line-height: 15px;">Trustpilot</td>
        </tr>
        <tr>
          <td>${renderFooter()}</td>
        </tr>
      </table>
    `
  });
}
