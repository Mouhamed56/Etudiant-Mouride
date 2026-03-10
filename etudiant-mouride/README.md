# Étudiant Mouride – React App

Application React bilingue (FR/EN) pour le projet Étudiant Mouride de Mouhamed Sene.

## 🚀 Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start

# 3. Build de production
npm run build
```

## 📁 Structure du projet

```
etudiant-mouride/
├── public/
│   └── index.html              ← Point d'entrée HTML (fonts Google)
│
├── src/
│   ├── index.js                ← Montage React 18
│   ├── index.css               ← Tailwind + styles custom Mouride
│   ├── App.js                  ← Composition de toutes les sections
│   │
│   ├── hooks/
│   │   └── useLang.js          ← Context FR/EN + hook useLang() + dictionnaire
│   │
│   ├── data/
│   │   └── articles.js         ← 6 articles de blog bilingues
│   │
│   ├── components/
│   │   └── Navbar.js           ← Navigation fixe + menu mobile + dropdown
│   │
│   └── sections/
│       ├── Hero.js             ← Accueil / landing
│       ├── About.js            ← À Propos – Mouhamed Sene
│       ├── Teachings.js        ← Enseignements mourides
│       ├── Videos.js           ← Vidéos YouTube
│       ├── Book.js             ← Mon Livre
│       ├── Xassida.js          ← Audio Khassaïdes
│       ├── Library.js          ← Bibliothèque PDFs
│       ├── Mission.js          ← Mission du Cheikh
│       ├── Economy.js          ← Modèle économique mouride
│       ├── Blog.js             ← Blog avec filtres + modal + commentaires
│       ├── Quotes.js           ← Citations inspirantes
│       ├── Gallery.js          ← Galerie photos
│       ├── Contact.js          ← Formulaire de contact
│       └── Footer.js           ← Pied de page + liens sociaux
│
├── tailwind.config.js          ← Couleurs Mouride + polices
├── postcss.config.js
└── package.json
```

## 🎨 Palette de couleurs

| Nom                  | Valeur    |
|----------------------|-----------|
| `mouride-green`      | `#166534` |
| `mouride-green-dark` | `#14532d` |
| `mouride-gold`       | `#D4B558` |
| `mouride-gold-light` | `#E5CA7A` |
| `mouride-cream`      | `#FDF8F0` |

## 🌍 Internationalisation

Le hook `useLang()` fournit :
- `lang` : `'fr'` ou `'en'`
- `t(key)` : traduit une clé
- `toggleLang()` : bascule la langue

## 📂 Assets attendus dans `/public/`

Placez vos fichiers dans :
- `/public/images/` → photos
- `/public/pdf/`    → documents PDF
- `/public/son/`    → fichiers audio MP3/M4A
