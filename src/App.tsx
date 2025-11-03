import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { OfflineBanner } from './components/OfflineBanner';
import { InstallPrompt } from './components/InstallPrompt';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { usePWA } from './hooks/usePWA';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');
  const { isOnline, isInstallable, installPWA } = usePWA();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
      <OfflineBanner isOnline={isOnline} />
      <InstallPrompt isInstallable={isInstallable} onInstall={installPWA} />
    </ThemeProvider>
  );
}

export default App;
