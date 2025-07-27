import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollProgress } from '@/components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ThankYouPage from './components/Footer';
import Gallery from './components/Gallery';
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Achievements />
        <ThankYouPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
