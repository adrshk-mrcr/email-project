import fs from 'node:fs';
import path from 'node:path';
import { renderCodeEmail } from './templates/code-email.js';
import { renderTableEmail } from './templates/table-email.js';

const previewsDir = path.resolve(process.cwd(), 'previews');

fs.mkdirSync(previewsDir, { recursive: true });

fs.writeFileSync(path.join(previewsDir, 'code-email.html'), renderCodeEmail(), 'utf8');
fs.writeFileSync(path.join(previewsDir, 'table-email.html'), renderTableEmail(), 'utf8');

console.log('Rendered previews:');
console.log(path.join(previewsDir, 'code-email.html'));
console.log(path.join(previewsDir, 'table-email.html'));
