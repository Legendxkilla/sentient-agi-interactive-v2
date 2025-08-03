import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src="/assets/logo-placeholder.png" alt="Sentient AGI Logo" className="h-10" />
        <h1 className="text-xl font-bold">Sentient AGI Workflow</h1>
      </div>
    </header>
  );
}
