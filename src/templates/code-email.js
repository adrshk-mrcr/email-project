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

export function renderCodeEmail({ code = '65328' } = {}) {
  return renderLayout({
    title: 'Authentication code',
    previewText: `Your Mercuryo authentication code is ${code}.`,
    body: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="email-logo">mercuryo</td>
        </tr>
        <tr>
          <td class="email-title" style="padding-bottom: 12px;">Authentication code</td>
        </tr>
        <tr>
          <td class="email-text email-primary" style="padding-bottom: 16px;">Your authentication code is:</td>
        </tr>
        <tr>
          <td style="padding-bottom: 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="email-surface">
              <tr>
                <td style="padding: 20px 40px;">
                  <div class="email-primary" style="font-family: Arial, sans-serif; font-size: 48px; line-height: 1; font-weight: 600;">${code}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="email-text email-primary" style="padding-bottom: 12px;">If you did not make any requests, just ignore this email</td>
        </tr>
        <tr>
          <td class="email-text email-primary">Regards,<br />Mercuryo Team</td>
        </tr>
        <tr>
          <td>${renderFooter()}</td>
        </tr>
      </table>
    `
  });
}
