import { loadEnv } from './lib/env.js';
import { sendEmail } from './lib/resend.js';
import { renderCodeEmail } from './templates/code-email.js';
import { renderTableEmail } from './templates/table-email.js';

loadEnv();

const recipients = [
  ...(process.env.RECIPIENTS
    ? process.env.RECIPIENTS.split(',').map((item) => item.trim()).filter(Boolean)
    : [
        'a.shakirov@mercuryo.io',
        'neverwitnt@gmail.com',
        'shakirov382@icloud.com'
      ])
];

const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';

async function main() {
  const messages = [
    {
      subject: 'Test: Authentication code email',
      html: renderCodeEmail()
    },
    {
      subject: 'Test: Wallet topped up email',
      html: renderTableEmail()
    }
  ];

  for (const message of messages) {
    const result = await sendEmail({
      from,
      to: recipients,
      subject: message.subject,
      html: message.html
    });

    console.log(`${message.subject}: ${result.id}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
