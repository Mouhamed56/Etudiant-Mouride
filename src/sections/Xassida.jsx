import { useLang } from '../hooks/useLang';

const SONS = [
  {
    key:'s1',
    num: '01',
    file:'son/ajabani.mp3',
    title_fr:'Ajabani',
    title_en:'Ajabani',
    reciter_fr:'Kourel Hizbut Tarkhiyah',
    reciter_en:'Kourel Hizbut Tarkhiyah',
    desc_fr:"L'attraction des cœurs – Un poème sur l'amour divin et la dévotion spirituelle.",
    desc_en:'The attraction of hearts – A poem on divine love and spiritual devotion.',
  },
  {
    key:'s2',
    num: '02',
    file:'son/Matlabul_Fawzayni_Kurel_1_National_HTDKH_Laylatul_Qadr_2025M4A_128K.m4a',
    title_fr:'Matlabul Fawzayni',
    title_en:'Matlabul Fawzayni',
    reciter_fr:'Kourel 1 HTDKH',
    reciter_en:'Kourel 1 HTDKH',
    desc_fr:"La quête des deux bonheurs – Guidance pour le succès ici-bas et dans l'au-delà.",
    desc_en:'The quest for two happinesses – Guidance for success in this world and the hereafter.',
  },
  {
    key:'s3',
    num: '03',
    file:'son/chahrou-ramadan.mp3',
    title_fr:'Chahrou Ramadan',
    title_en:'Chahrou Ramadan',
    reciter_fr:'Kourel Tout Tankh',
    reciter_en:'Kourel Tout Tankh',
    desc_fr:'Les voies du Paradis – Guide spirituel vers les chemins de la félicité éternelle.',
    desc_en:'The paths of Paradise – Spiritual guide toward eternal bliss.',
  },
  {
    key:'s4',
    num: '04',
    file:'son/bouchralana.m4a',
    title_fr:'Bouchralana',
    title_en:'Bouchralana',
    reciter_fr:'Kourel HTDKH',
    reciter_en:'Kourel HTDKH',
    desc_fr:"L'illuminateur des poitrines – Poème sur la lumière de la foi et de la connaissance.",
    desc_en:'The illuminator of chests – Poem on the light of faith and knowledge.',
  },
  {
    key:'s5',
    num: '05',
    file:'son/JAZBUT_DAROU_MOUKHTY_&_BAYE_ABLAYE_NIANG_HTDKH_11J_DOUNDAL_KOOR.mp3',
    title_fr:'Jazb Darou Moukhty',
    title_en:'Jazb Darou Moukhty',
    reciter_fr:'HTDKH',
    reciter_en:'HTDKH',
    desc_fr:"Jazb Darou Moukhty – Récitation dédiée à la cité de Darou Mousty.",
    desc_en:'Jazb Darou Moukhty – Recitation dedicated to the city of Darou Mousty.',
  },
];

export default function Xassida() {
  const { t, lang } = useLang();
  return (
    <section id="xassida" className="py-20 lg:py-32 bg-mouride-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mouride-gold font-semibold text-sm uppercase tracking-wider">{t('xassida.tag')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">{t('xassida.title')}</h2>
          <div className="w-16 h-1 bg-mouride-gold mx-auto rounded-full mb-6" />
          <p className="text-green-200 max-w-2xl mx-auto">{t('xassida.subtitle')}</p>
        </div>

        {/* Grid 2 colonnes sur desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SONS.map((s) => (
            <div key={s.key} className="bg-white/10 rounded-2xl p-5 border border-white/20 flex flex-col gap-3">

              {/* Titre + numéro */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-mouride-gold text-mouride-green rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {s.num}
                </span>
                <div>
                  <p className="text-white font-display font-bold text-base leading-tight">
                    {lang === 'fr' ? s.title_fr : s.title_en}
                  </p>
                  <p className="text-mouride-gold text-xs">{lang === 'fr' ? s.reciter_fr : s.reciter_en}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-green-200 text-xs leading-relaxed">
                {lang === 'fr' ? s.desc_fr : s.desc_en}
              </p>

              {/* Player audio */}
              <audio
                controls
                className="w-full"
                style={{ height: '40px', borderRadius: '8px' }}
              >
                <source src={s.file} />
              </audio>

            </div>
          ))}
        </div>

        {/* Note */}
        

      </div>
    </section>
  );
}
