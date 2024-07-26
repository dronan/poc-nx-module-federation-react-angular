import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NxWelcome from './app/nx-welcome';

class MfeReactApp extends HTMLElement {
  connectedCallback() {
    const container = document.getElementsByTagName('mft-wc-wrapper')[0] as HTMLElement;
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <NxWelcome title="react-remote-a" />
      </StrictMode>,
    );
  }
}

customElements.define('react-remote-a-bootstrap-page', MfeReactApp);

export default MfeReactApp;
