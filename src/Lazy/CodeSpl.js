// Code splitting involves breaking up your application into smaller chunks or bundles that are loaded only when needed. This technique helps reduce the size of the initial JavaScript bundle,
//  improving the app's performance.


import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function CodeSpl() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default CodeSpl;
