const express = require('express');
const path = require('path');

const app = express();

// Add basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Web Lapu Izstrāde Latvijā - Profesionāli Risinājumi',
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

const PORT = process.env.PORT || 3000;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('index', { 
        title: 'Page Not Found',
        page: 'home'
    });
});

// Start server only if not being required as module
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;