import { LangProvider } from './hooks/useLang';
import Navbar      from './components/Navbar';
import Hero        from './sections/Hero';
import About       from './sections/About';
import Institut    from './sections/Institut';
import Teachings   from './sections/Teachings';
import Khassaides  from './sections/Khassaides';
import Evenements  from './sections/Evenements';
import Khalifes    from './sections/Khalifes';
import Videos      from './sections/Videos';
import Podcast     from './sections/Podcast';
import Book        from './sections/Book';
import Xassida     from './sections/Xassida';
import Library     from './sections/Library';
import Mission     from './sections/Mission';
import Economy     from './sections/Economy';
import Actualites  from './sections/Actualites';
import Blog        from './sections/Blog';
import Quotes      from './sections/Quotes';
import Gallery     from './sections/Gallery';
import Contact     from './sections/Contact';
import Footer      from './sections/Footer';

export default function App() {
  return (
    <LangProvider>
      <div className="font-body text-gray-800">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Institut />
          <Teachings />
          <Khassaides />
          <Evenements />
          <Khalifes />
          <Videos />
          <Podcast />
          <Book />
          <Xassida />
          <Library />
          <Mission />
          <Economy />
          <Actualites />
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
