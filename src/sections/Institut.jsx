import { useLang } from '../hooks/useLang';

const PROGRAMMES = [
  { icon: '📚', key: 'prog1', color: 'bg-emerald-50 border-emerald-200' },
  { icon: '🎓', key: 'prog2', color: 'bg-amber-50 border-amber-200' },
  { icon: '🌐', key: 'prog3', color: 'bg-blue-50 border-blue-200' },
  { icon: '💡', key: 'prog4', color: 'bg-purple-50 border-purple-200' },
];

export default function Institut() {
  const { lang } = useLang();

  const content = {
    fr: {
      tag: 'Notre Projet',
      title: 'Étudiant Mouride',
      subtitle: 'Une plateforme dédiée à l\'étude et à la transmission de la pensée de Cheikh Ahmadou Bamba',
      vision_title: 'Notre Vision',
      vision: "Étudiant Mouride est une initiative intellectuelle et éducative qui vise à devenir la référence numérique pour l'étude et la transmission de la pensée, des enseignements et de la vision de société de Cheikh Ahmadou Bamba. Nous croyons que le savoir mouride peut répondre aux défis du monde contemporain.",
      mission_title: 'Notre Mission',
      mission: "Rendre accessible à tous — jeunes, étudiants, chercheurs et curieux du monde entier — l'héritage spirituel, intellectuel et civilisationnel du mouridisme, en utilisant les outils modernes du numérique et de l'éducation.",
      programmes: [
        { title: 'Cours & Formations', desc: 'Modules éducatifs sur la pensée mouride, les Khassaïdes et l\'histoire du Cheikh.' },
        { title: 'Recherche & Publications', desc: 'Articles, analyses et études académiques sur le mouridisme et ses dimensions.' },
        { title: 'Plateforme Numérique', desc: 'Site web, podcast, vidéos et réseaux sociaux pour toucher la jeunesse globale.' },
        { title: 'Communauté & Échanges', desc: 'Espace de discussion et de partage entre étudiants mourides du monde entier.' },
      ],
      values: ['Foi', 'Savoir', 'Travail', 'Service', 'Excellence'],
      cta: 'Rejoindre le mouvement',
      cta2: 'Nous contacter',
      stat1_label: 'Sections thématiques',
      stat2_label: 'Langues disponibles',
      stat3_label: 'Années de contenu',
      founder: 'Fondé par Mouhamed Sène',
      founder_desc: 'Étudiant en Master, Entrepreneur Tech & Auteur du livre "Le Leadership de Cheikh Ahmadou Bamba"',
    },
    en: {
      tag: 'Our Project',
      title: 'Étudiant Mouride',
      subtitle: 'A platform dedicated to the study and transmission of the thought of Cheikh Ahmadou Bamba',
      vision_title: 'Our Vision',
      vision: "Étudiant Mouride is an intellectual and educational initiative that aims to become the digital reference for the study and transmission of the thought, teachings and social vision of Cheikh Ahmadou Bamba. We believe that Mouride knowledge can respond to the challenges of the contemporary world.",
      mission_title: 'Our Mission',
      mission: "Make accessible to everyone — young people, students, researchers and curious people worldwide — the spiritual, intellectual and civilizational heritage of Mouridism, using modern digital and educational tools.",
      programmes: [
        { title: 'Courses & Training', desc: 'Educational modules on Mouride thought, Khassaïdes and the history of the Sheikh.' },
        { title: 'Research & Publications', desc: 'Articles, analyses and academic studies on Mouridism and its dimensions.' },
        { title: 'Digital Platform', desc: 'Website, podcast, videos and social media to reach global youth.' },
        { title: 'Community & Exchanges', desc: 'Discussion and sharing space between Mouride students worldwide.' },
      ],
      values: ['Faith', 'Knowledge', 'Work', 'Service', 'Excellence'],
      cta: 'Join the movement',
      cta2: 'Contact us',
      stat1_label: 'Thematic sections',
      stat2_label: 'Available languages',
      stat3_label: 'Years of content',
      founder: 'Founded by Mouhamed Sène',
      founder_desc: 'Master\'s Student, Tech Entrepreneur & Author of "The Leadership of Cheikh Ahmadou Bamba"',
    },
  };

  const c = content[lang];

  return (
    <section id="institut" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mouride-gold font-semibold text-sm uppercase tracking-wider">{c.tag}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mouride-green mt-2 mb-4">{c.title}</h2>
          <div className="w-16 h-1 bg-mouride-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{c.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { num: '10+', label: c.stat1_label },
            { num: '2', label: c.stat2_label },
            { num: '2026', label: c.stat3_label },
          ].map((s, i) => (
            <div key={i} className="text-center bg-mouride-cream rounded-2xl p-6">
              <p className="text-3xl font-display font-bold text-mouride-green">{s.num}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-mouride-green text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-mouride-gold text-2xl">🔭</span>
              <h3 className="font-display font-bold text-xl">{c.vision_title}</h3>
            </div>
            <p className="text-green-100 leading-relaxed">{c.vision}</p>
          </div>
          <div className="bg-mouride-gold rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-mouride-green text-2xl">🎯</span>
              <h3 className="font-display font-bold text-xl text-mouride-green">{c.mission_title}</h3>
            </div>
            <p className="text-amber-900 leading-relaxed">{c.mission}</p>
          </div>
        </div>

        {/* Programmes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {c.programmes.map((prog, i) => (
            <div key={i} className={`border-2 ${PROGRAMMES[i].color} rounded-2xl p-6`}>
              <span className="text-3xl mb-4 block">{PROGRAMMES[i].icon}</span>
              <h4 className="font-display font-bold text-mouride-green mb-2">{prog.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h3 className="font-display font-bold text-mouride-green text-xl mb-6">
            {lang === 'fr' ? 'Nos Valeurs' : 'Our Values'}
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {c.values.map(v => (
              <span key={v} className="bg-mouride-green text-white font-semibold px-6 py-2 rounded-full text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="bg-mouride-cream rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-12">
          <div className="w-20 h-20 bg-mouride-green rounded-full flex items-center justify-center text-mouride-gold font-display font-bold text-2xl flex-shrink-0">
            MS
          </div>
          <div>
            <p className="font-display font-bold text-mouride-green text-lg">{c.founder}</p>
            <p className="text-gray-600 text-sm mt-1">{c.founder_desc}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-mouride-green text-white font-semibold px-8 py-3 rounded-full hover:bg-mouride-green-dark transition-colors text-center">
            {c.cta}
          </a>
          <a href="#contact" className="border-2 border-mouride-green text-mouride-green font-semibold px-8 py-3 rounded-full hover:bg-mouride-green hover:text-white transition-colors text-center">
            {c.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
