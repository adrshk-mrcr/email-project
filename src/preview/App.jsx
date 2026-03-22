import { Agentation } from 'agentation';
import { getTablePreviewHtml } from './email-preview.js';
import './preview.css';

const lightHtml = getTablePreviewHtml();
const darkHtml = getTablePreviewHtml({ dark: true });

function PreviewFrame({ title, html }) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  const isDark = title.toLowerCase().includes('dark');

  return (
    <section className="preview-card">
      <header className="preview-card__header">
        <h2>{title}</h2>
      </header>
      <div className={`preview-frame email-preview ${isDark ? 'email-preview--dark' : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <main className="preview-shell">
        <section className="preview-intro">
          <p className="preview-eyebrow">Mercuryo Email Preview</p>
          <h1>Wallet topped up email</h1>
          <p>
            Live React shell for checking the desktop table email in light and dark theme
            before we move the final version back into production email markup.
          </p>
        </section>

        <section className="preview-grid">
          <PreviewFrame title="Light theme" html={lightHtml} />
          <PreviewFrame title="Dark theme" html={darkHtml} />
        </section>
      </main>
      {import.meta.env.DEV ? <Agentation /> : null}
    </>
  );
}
