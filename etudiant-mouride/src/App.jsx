import { LangProvider } from './hooks/useLang';
import Navbar    from './components/Navbar';
import Hero      from './sections/Hero';
import About     from './sections/About';
import Teachings from './sections/Teachings';
import Videos    from './sections/Videos';
import Book      from './sections/Book';
import Xassida   from './sections/Xassida';
import Library   from './sections/Library';
import Mission   from './sections/Mission';
import Economy   from './sections/Economy';
import Blog      from './sections/Blog';
import Quotes    from './sections/Quotes';
import Gallery   from './sections/Gallery';
import Contact   from './sections/Contact';
import Footer    from './sections/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="font-body text-gray-800">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Teachings />
          <Videos />
          <Book />
          <Xassida />
          <Library />
          <Mission />
          <Economy />
          <Blog />
          <Quotes />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
