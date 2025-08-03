import React from 'react';
import Header from './components/Header.jsx';
import Workflow from './components/Workflow.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Workflow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
