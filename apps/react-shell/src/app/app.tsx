import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ReactRemoteB = React.lazy(() => import('react-remote-b/Module'));

const ReactRemoteA = React.lazy(() => import('react-remote-a/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-remote-b">ReactRemoteB</Link>
        </li>
        <li>
          <Link to="/react-remote-a">ReactRemoteA</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-shell" />} />
        <Route path="/react-remote-b" element={<ReactRemoteB />} />
        <Route path="/react-remote-a" element={<ReactRemoteA />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
