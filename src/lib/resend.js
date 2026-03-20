const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export async function sendEmail({ from, to, subject, html, attachments = [] }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      attachments
    })
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(`Resend error ${response.status}: ${JSON.stringify(payload)}`);
  }

  return payload;
}
