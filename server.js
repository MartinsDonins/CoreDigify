const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'CoreDigify - Profesionāla Web Lapu Izstrāde un WordPress Risinājumi',
        page: 'home'
    });
});


app.get('/kontakti', (req, res) => {
    res.render('contact', { 
        title: 'Sazināties ar Mums - CoreDigify',
        page: 'contact'
    });
});

app.get('/web-izstrade', (req, res) => {
    res.render('webdev', { 
        title: 'Web Lapu Izstrāde - CoreDigify WordPress un Pielāgotās Vietnes',
        page: 'webdev'
    });
});

app.listen(PORT, () => {
    console.log(`Serveris darbojas uz porta ${PORT}`);
});