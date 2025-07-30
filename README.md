# CoreDigify.com - Web Lapu Izstrāde un WordPress Risinājumi

Profesionāla web lapu izstrādes un hostinga mājaslapa latviešu valodā, izveidota ar Node.js 22.17.0 un Express.

## Funkcionalitāte

- 💻 Web lapu izstrādes pakalpojumi
- 📱 Responzīvs dizains
- 🎨 Moderns UI ar gradientiem un animācijām
- 🚀 Ātrdarbīgs Express.js serveris
- 📧 Kontaktu forma
- 💰 Cenu plāni web izstrādei
- ❓ FAQ sadaļa
- 🛡️ SSL drošība
- 📊 Animēta statistika
- 🌐 Hostings kā papildus pakalpojums

## Lapas

- **Sākums** - Web izstrādes fokuss ar hostingu kā papildus
- **Pakalpojumi** - Hostinga pakalpojumi (VPS, domēni, SSL)
- **Web Izstrāde** - Detalizēta web izstrādes informācija
- **Cenas** - Hostinga un VPS plāni
- **Kontakti** - Kontaktinformācija un forma

## Tehniskā informācija

### Izmantotās tehnoloģijas
- **Node.js 22.17.0** (specifiska versija)
- Express.js 4.19.2
- EJS šabloni
- CSS3 ar Flexbox/Grid
- Vanilla JavaScript
- Font Awesome ikonas
- Google Fonts (Inter)

### Projekta struktūra
```
├── server.js          # Galvenais servera fails
├── package.json       # NPM atkarības ar Node.js 22.17.0
├── .nvmrc            # Node Version Manager konfigurācija
├── views/             # EJS šabloni
│   ├── index.ejs      # Sākumlapa (web izstrāde)
│   ├── services.ejs   # Pakalpojumi (hostings)
│   ├── webdev.ejs     # Web izstrādes lapa
│   ├── pricing.ejs    # Cenas
│   ├── contact.ejs    # Kontakti
│   └── partials/      # Daļējie šabloni
├── public/            # Statiskie faili
│   ├── css/          # Stilu faili
│   └── js/           # JavaScript faili
└── README.md         # Dokumentācija
```

## Uzstādīšana

### Priekšnosacījumi
- Node.js 22.17.0 (obligāti)
- npm 10.0.0 vai jaunāka versija

### Uzstādīšanas soļi

1. **Pārbaudiet Node.js versiju:**
   ```bash
   node --version  # Jābūt v22.17.0
   ```

2. **Ja izmantojat NVM:**
   ```bash
   nvm use  # Automātiski ielādēs versiju no .nvmrc
   ```

3. **Klonējiet repozitoriju un instalējiet atkarības:**
   ```bash
   npm install
   ```

4. **Pārbaudiet Node.js versiju projektā:**
   ```bash
   npm run check-node
   ```

5. **Palaidiet serveri:**
   ```bash
   npm start
   ```

6. **Atveriet pārlūkprogrammā:** http://localhost:3000

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

## Node.js Versijas Pārvaldība

Projekts ir konfigurēts izmantot Node.js 22.17.0. Dažādi faili versijas kontrolei:

- **package.json** - `engines` sadaļa definē Node.js 22.17.0
- **.nvmrc** - NVM (Node Version Manager) konfigurācija  
- **.node-version** - Nodenv un citu versiju menedžeru atbalsts

### Versijas maiņa ar NVM:
```bash
# Windows
nvm install 22.17.0
nvm use 22.17.0

# Linux/Mac
nvm install 22.17.0
nvm use 22.17.0
```

### Versijas pārbaude:
```bash
npm run check-node  # Parāda pašreizējo Node.js versiju
```

## Konfigurācija

Serveris automātiski darbojas uz porta 3000, bet var mainīt ar PORT environment variable:

```bash
PORT=8080 npm start
```

## Publikācijas vide

Lapa tiek izvietota uz **CloudLinux** servera ar **cPanel** vadības paneli,
kur ir uzstādīta **Node.js 22.17.0**. Tas nodrošina, ka projekts darbojas
ar tieši šo Node.js versiju gan izstrādē, gan produkcijā.

## Licences

MIT License