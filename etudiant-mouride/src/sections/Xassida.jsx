import { useLang } from '../hooks/useLang';

const TRACKS = [
  { title:'Ajabani Raboussama', rKey:'r1', dKey:'d1', src:"son/J19%20AJABANI%20S%20MBAYE%20DIOP%20KUREL%20SERIGNE%20MAHIB%20HT.mp3" },
  { title:'Matlabul Fawzayni',  rKey:'r2', dKey:'d2', src:"son/Matlabul_Fawzayni_Kurel_1_National_HTDKH_Laylatul_Qadr_2025M4A_128K.m4a" },
  { title:'Chakhrou Ramadan',   rKey:'r3', dKey:'d3', src:"son/Chahrou_Ramadan_Zalika_Kurel_1_Tout_Tank_HTDKH_Touba_DUNDAL_WEERU.mp3" },
  { title:'Bouchra Laana',      rKey:'r4', dKey:'d4', src:"son/Bouchralana_S_Ciss%C3%A9_Kurel_1_HTDKH_Touba_DUNDAL_WEERU_KOOR128k.m4a" },
];

const MusicIcon = () => (
  <svg className="w-8 h-8 text-mouride-gold" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

export default function Xassida() {
  const { t } = useLang();
  return (
    <section id="xassida" className="py-20 lg:py-32 bg-mouride-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mouride-gold font-semibold text-sm uppercase tracking-wider">{t('xassida.tag')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-mouride-green mt-2 mb-4">{t('xassida.title')}</h2>
          <div className="section-divider" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">{t('xassida.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TRACKS.map(track => (
            <div key={track.title} className="audio-player rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-mouride-gold/20 flex items-center justify-center flex-shrink-0">
                  <MusicIcon />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg">{track.title}</h3>
                  <p className="text-mouride-gold text-sm">{t(`xassida.${track.rKey}`)}</p>
                </div>
              </div>
              <audio controls className="w-full mt-4">
                <source src={track.src} type="audio/mpeg" />
              </audio>
              <p className="text-white/70 text-sm mt-4">{t(`xassida.${track.dKey}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
