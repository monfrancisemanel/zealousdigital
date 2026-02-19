
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesHub from './pages/Services';
import IdentityArchitecture from './pages/services/IdentityArchitecture';
import ConversionLandingPages from './pages/services/websites/ConversionLandingPages';
import SEOSiteArchitecture from './pages/services/websites/SEOSiteArchitecture';
import OperationalOrchestration from './pages/services/OperationalOrchestration';
import CRMSetup from './pages/services/automation/CRMSetup';
import RevenueOrchestration from './pages/services/RevenueOrchestration';
import VisibilityStrategy from './pages/services/VisibilityStrategy';
import TechnicalSEO from './pages/services/seo/TechnicalSEO';
import ContentEngine from './pages/services/seo/ContentEngine';
import ProgrammaticSEO from './pages/services/seo/ProgrammaticSEO';
import GenerativeVisibility from './pages/services/GenerativeVisibility';
import EntityBuilding from './pages/services/llm/EntityBuilding';
import SchemaKnowledge from './pages/services/llm/SchemaKnowledge';
import AISearchOptimization from './pages/services/llm/AISearchOptimization';
import AppEngineering from './pages/services/AppEngineering';
import AICalling from './pages/services/automation/AICalling';
import LeadNurture from './pages/services/automation/LeadNurture';
import ReviewGeneration from './pages/services/automation/ReviewGeneration';
import Proof from './pages/Proof';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesHub />} />
            
            {/* Identity Architecture */}
            <Route path="/services/identity-architecture" element={<IdentityArchitecture />} />
            <Route path="/services/conversion-hubs" element={<ConversionLandingPages />} />
            <Route path="/services/seo-site-architecture" element={<SEOSiteArchitecture />} />
            
            {/* Operational Orchestration */}
            <Route path="/services/operational-orchestration" element={<OperationalOrchestration />} />
            <Route path="/services/revenue-orchestration" element={<RevenueOrchestration />} />
            <Route path="/services/crm-implementation" element={<CRMSetup />} />
            <Route path="/services/app-engineering" element={<AppEngineering />} />
            
            {/* Automation */}
            <Route path="/services/ai-calling" element={<AICalling />} />
            <Route path="/services/lead-nurture" element={<LeadNurture />} />
            <Route path="/services/review-generation" element={<ReviewGeneration />} />

            {/* Visibility Strategy */}
            <Route path="/services/visibility-strategy" element={<VisibilityStrategy />} />
            <Route path="/services/technical-seo" element={<TechnicalSEO />} />
            <Route path="/services/content-engine" element={<ContentEngine />} />
            <Route path="/services/programmatic-seo" element={<ProgrammaticSEO />} />
            
            {/* Generative Visibility */}
            <Route path="/services/generative-visibility" element={<GenerativeVisibility />} />
            <Route path="/services/entity-building" element={<EntityBuilding />} />
            <Route path="/services/schema-signals" element={<SchemaKnowledge />} />
            <Route path="/services/ai-search-optimization" element={<AISearchOptimization />} />
            
            {/* Core Pages */}
            <Route path="/proof" element={<Proof />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources/blog" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
