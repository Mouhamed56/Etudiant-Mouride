import { useState } from 'react';
import { useLang } from '../hooks/useLang';
import { ARTICLES } from '../data/articles';

const CATS = ['all','spiritualite','leadership','economie','jeunesse','histoire'];
const REACTIONS = [
  { emoji:'❤️', id:'love' },
  { emoji:'🤲', id:'pray' },
  { emoji:'⭐', id:'star' },
  { emoji:'💡', id:'idea' },
  { emoji:'🌟', id:'inspired' },
];

// ─── Modal article ─────────────────────────────────────────────────────────
function ArticleModal({ article, lang, t, onClose }) {
  const data = article[lang] || article.en;
  const [counts, setCounts] = useState({ love:0, pray:0, star:0, idea:0, inspired:0 });
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const react = (id) => setCounts(c => ({ ...c, [id]: c[id] + 1 }));
  const total  = Object.values(counts).reduce((a,b)=>a+b, 0);

  const post = () => {
    if (!name.trim() || !text.trim()) return;
    const now = new Date();
    setComments(prev => [...prev, {
      name: name.trim(), text: text.trim(),
      time: now.toLocaleDateString(lang==='fr'?'fr-FR':'en-US',{day:'numeric',month:'short'}) +
            ' ' + now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0'),
    }]);
    setName(''); setText('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-y-auto relative flex flex-col">

        {/* Fermer */}
        <button type="button" onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-gray-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Header coloré */}
        <div className={`h-52 bg-gradient-to-br ${article.gradient} flex items-end p-6 sm:p-8 rounded-t-3xl flex-shrink-0`}>
          <div>
            <span className={`px-3 py-1 ${article.badge} text-xs font-bold rounded-full mb-3 inline-block`}>
              {data.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight mt-2">{data.title}</h2>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 px-6 sm:px-8 py-4 border-b border-gray-100 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-mouride-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Mouhamed Sene
          </span>
          <span>📅 {data.date}</span>
          <span>⏱ {data.readtime}</span>
        </div>

        {/* Corps */}
        <div className="px-6 sm:px-8 py-6 text-gray-700 leading-relaxed flex-1"
          dangerouslySetInnerHTML={{ __html: data.body }} />

        {/* Réactions */}
        <div className="px-6 sm:px-8 py-5 border-t border-gray-100 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-600">{t('blog.reactions')}</p>
            {total > 0 && <span className="text-xs text-gray-400">{total} réaction{total>1?'s':''}</span>}
          </div>
          <div className="flex flex-wrap gap-2">
            {REACTIONS.map(r => (
              <button key={r.id} type="button" onClick={() => react(r.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-gray-200 hover:border-mouride-gold hover:bg-yellow-50 transition-all text-sm font-medium">
                <span className="text-lg">{r.emoji}</span>
                <span className="text-gray-600">{counts[r.id]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Commentaires */}
        <div className="px-6 sm:px-8 py-5 border-t border-gray-100 flex-shrink-0 bg-gray-50 rounded-b-3xl">
          <p className="text-sm font-semibold text-gray-700 mb-4">
            {t('blog.comments')} <span className="text-mouride-green font-bold">({comments.length})</span>
          </p>

          {comments.length === 0
            ? <p className="text-gray-400 text-sm text-center py-3">{t('blog.firstComment')}</p>
            : <div className="space-y-3 mb-4 max-h-52 overflow-y-auto">
                {comments.map((c,i) => (
                  <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-green-800">
                      {c.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 text-sm">{c.name}</span>
                        <span className="text-gray-400 text-xs">{c.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
          }

          {/* Formulaire */}
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-mouride-green flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-mouride-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="flex-1">
              <input value={name} onChange={e=>setName(e.target.value)}
                placeholder="Votre prénom..." type="text"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg mb-2 focus:outline-none focus:border-mouride-gold" />
              <textarea value={text} onChange={e=>setText(e.target.value)} rows={2}
                placeholder="Votre commentaire..."
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-mouride-gold" />
              <button type="button" onClick={post}
                className="mt-2 px-5 py-2 bg-mouride-green text-white text-sm font-semibold rounded-full hover:bg-mouride-green-dark transition-all">
                {t('blog.commentBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Blog ──────────────────────────────────────────────────────────
export default function Blog() {
  const { t, lang } = useLang();
  const [cat, setCat]        = useState('all');
  const [openArt, setOpenArt]= useState(null);
  const [email, setEmail]    = useState('');
  const [subDone, setSubDone]= useState(false);

  const subscribe = () => {
    if (email.includes('@')) {
      setEmail(''); setSubDone(true);
      setTimeout(() => setSubDone(false), 4000);
    }
  };

  const filtered = ARTICLES.filter(a => cat === 'all' || a.category === cat);

  return (
    <>
      <section id="blog" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-mouride-gold font-semibold text-sm uppercase tracking-wider">{t('blog.tag')}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mouride-green mt-2 mb-4">{t('blog.title')}</h2>
            <div className="section-divider" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">{t('blog.subtitle')}</p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATS.map(c => (
              <button key={c} type="button" onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
                  ${cat===c ? 'bg-mouride-green text-white' : 'bg-mouride-cream text-mouride-green hover:bg-mouride-green hover:text-white'}`}>
                {c === 'all' ? t('blog.all') : t(`blog.${c}`)}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(article => {
              const data = article[lang] || article.en;
              return (
                <article key={article.id}
                  className="bg-mouride-cream rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => setOpenArt(article)}
                  role="button" tabIndex={0}
                  onKeyDown={e => e.key==='Enter' && setOpenArt(article)}>
                  <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${article.badge} text-xs font-bold rounded-full`}>{data.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                      <span>📅 {data.date}</span>
                      <span>⏱ {data.readtime}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-mouride-green mb-3 leading-tight">{data.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{data.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-mouride-gold font-semibold text-sm">{t('blog.readmore')}</span>
                      <div className="flex items-center space-x-1 text-gray-400 text-xs">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-gradient-to-br from-mouride-green to-mouride-green-dark rounded-3xl p-10 pattern-bg text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-3">{t('blog.newsletter.title')}</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">{t('blog.newsletter.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-mouride-gold"
                placeholder={t('blog.newsletter.ph')} />
              <button type="button" onClick={subscribe}
                className="px-8 py-3 bg-mouride-gold text-mouride-green font-bold rounded-full hover:bg-mouride-gold-light transition-all whitespace-nowrap">
                {t('blog.newsletter.btn')}
              </button>
            </div>
            {subDone && <p className="text-mouride-gold font-semibold mt-4">{t('blog.newsletter.success')}</p>}
          </div>
        </div>
      </section>

      {/* Modal */}
      {openArt && (
        <ArticleModal
          article={openArt} lang={lang} t={t}
          onClose={() => setOpenArt(null)} />
      )}
    </>
  );
}
