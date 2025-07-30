const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Web Hostings Latvijā - Uzticams un Ātrs',
        page: 'home'
    });
});

app.get('/pakalpojumi', (req, res) => {
    res.render('services', { 
        title: 'Mūsu Pakalpojumi - Web Hostings',
        page: 'services'
    });
});

app.get('/cenas', (req, res) => {
    res.render('pricing', { 
        title: 'Cenu Plāni - Web Hostings',
        page: 'pricing'
    });
});

app.get('/kontakti', (req, res) => {
    res.render('contact', { 
        title: 'Sazināties ar Mums - Web Hostings',
        page: 'contact'
    });
});

app.get('/web-izstrade', (req, res) => {
    res.render('webdev', { 
        title: 'Web Lapu Izstrāde - Profesionāli Risinājumi',
        page: 'webdev'
    });
});

app.listen(PORT, () => {
    console.log(`Serveris darbojas uz porta ${PORT}`);
});