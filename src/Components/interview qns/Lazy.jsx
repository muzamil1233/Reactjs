import React, { Suspense } from 'react';

const AboutPage = React.lazy(() => import('./AboutPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <AboutPage />
      </Suspense>
    </div>
  );
}
