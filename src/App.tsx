import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HeroSection } from './components/hero-section';
import { ProfessionalCard } from './components/professional-card';
import { ProfessionalDetails } from './components/professional-details';
import { SAMPLE_PROFESSIONALS } from './data/sample-data';
import { Stethoscope } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">TuRedProfesional</span>
        </Link>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Profesionales Destacados
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {SAMPLE_PROFESSIONALS.map((professional) => (
            <Link key={professional.id} to={`/professional/${professional.id}`}>
              <ProfessionalCard professional={professional} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

function ProfessionalPage() {
  // In a real app, we would fetch the professional based on the ID from the URL
  const professional = SAMPLE_PROFESSIONALS[0];
  return <ProfessionalDetails professional={professional} />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professional/:id" element={<ProfessionalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;