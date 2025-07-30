const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Default route redirects to English
app.get('/', (req, res) => {
    res.redirect('/en');
});

// English routes
app.get('/en', (req, res) => {
    res.render('index-en', { 
        title: 'CoreDigify - Professional Web Development and WordPress Solutions',
        page: 'home',
        lang: 'en'
    });
});

app.get('/en/web-development', (req, res) => {
    res.render('webdev-en', { 
        title: 'Web Development - CoreDigify WordPress and Custom Websites',
        page: 'webdev',
        lang: 'en'
    });
});

app.get('/en/contact', (req, res) => {
    res.render('contact-en', { 
        title: 'Contact Us - CoreDigify',
        page: 'contact',
        lang: 'en'
    });
});

// Latvian routes
app.get('/lv', (req, res) => {
    res.render('index', { 
        title: 'CoreDigify - Profesionāla Web Lapu Izstrāde un WordPress Risinājumi',
        page: 'home',
        lang: 'lv'
    });
});

app.get('/lv/web-izstrade', (req, res) => {
    res.render('webdev', { 
        title: 'Web Lapu Izstrāde - CoreDigify WordPress un Pielāgotās Vietnes',
        page: 'webdev',
        lang: 'lv'
    });
});

app.get('/lv/kontakti', (req, res) => {
    res.render('contact', { 
        title: 'Sazināties ar Mums - CoreDigify',
        page: 'contact',
        lang: 'lv'
    });
});

// Legacy redirects
app.get('/web-izstrade', (req, res) => {
    res.redirect('/lv/web-izstrade');
});

app.get('/kontakti', (req, res) => {
    res.redirect('/lv/kontakti');
});

app.listen(PORT, () => {
    console.log(`Serveris darbojas uz porta ${PORT}`);
});