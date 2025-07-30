# WebHost.lv - Web Hostinga Mājaslapa

Moderna web hostinga mājaslapa latviešu valodā, izveidota ar Node.js un Express.

## Funkcionalitāte

- 📱 Responzīvs dizains
- 🎨 Moderns UI ar gradientiem un animācijām
- 🚀 Ātrdarbīgs Express.js serveris
- 📧 Kontaktu forma
- 💰 Cenu plāni ar mēneša/gada pārslēgšanu
- ❓ FAQ sadaļa
- 🛡️ SSL drošība
- 📊 Animēta statistika

## Lapas

- **Sākums** - Hero sadaļa ar galvenajām īpašībām
- **Pakalpojumi** - Detalizēts pakalpojumu apraksts
- **Cenas** - Hostinga un VPS plāni
- **Kontakti** - Kontaktinformācija un forma

## Tehniskā informācija

### Izmantotās tehnoloģijas
- Node.js
- Express.js
- EJS šabloni
- CSS3 ar Flexbox/Grid
- Vanilla JavaScript
- Font Awesome ikonas
- Google Fonts (Inter)

### Projekta struktūra
```
├── server.js          # Galvenais servera fails
├── package.json       # NPM atkarības
├── views/             # EJS šabloni
│   ├── index.ejs      # Sākumlapa
│   ├── services.ejs   # Pakalpojumi
│   ├── pricing.ejs    # Cenas
│   ├── contact.ejs    # Kontakti
│   └── partials/      # Daļējie šabloni
├── public/            # Statiskie faili
│   ├── css/          # Stilu faili
│   └── js/           # JavaScript faili
└── README.md         # Dokumentācija
```

## Uzstādīšana

1. Klonējiet repozitoriju
2. Instalējiet atkarības:
   ```bash
   npm install
   ```
3. Palaidiet serveri:
   ```bash
   npm start
   ```
4. Atveriet pārlūkprogrammā: http://localhost:3000

## Izstrādei

Izstrādes režīmam ar automātisku restartēšanu:
```bash
npm run dev
```

## CSS Īpašības

- **Krāsas**: Zilas nianses (#2563eb) ar gradientiem
- **Fonts**: Inter (Google Fonts)
- **Ikonu bibliotēka**: Font Awesome 6
- **Animācijas**: CSS transitions un JavaScript scroll animācijas
- **Responzīvs**: Mobile-first dizains

## JavaScript Funkcionalitāte

- Mobilā navigācijas izvēlne
- Cenu pārslēgšana (mēnesis/gads)
- FAQ collapse/expand
- Kontaktu formas validācija
- Gludā ritināšana
- Scroll-to-top poga
- Statistikas skaitītāji
- Intersection Observer animācijas

## Konfigurācija

Serveris automātiski darbojas uz porta 3000, bet var mainīt ar PORT environment variable:

```bash
PORT=8080 npm start
```

## Licences

MIT License