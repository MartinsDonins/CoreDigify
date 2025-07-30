const express = require('express');
const path = require('path');

const app = express();

// Production environment check
const isProduction = process.env.NODE_ENV === 'production';

// Add basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Request logging for debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Test route for debugging
app.get('/test', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Server is working',
        timestamp: new Date().toISOString(),
        nodeVersion: process.version,
        environment: process.env.NODE_ENV || 'development'
    });
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Simple HTML route for testing
app.get('/simple', (req, res) => {
    res.send('<h1>CoreDigify Test Page</h1><p>If you can see this, the server is working!</p>');
});

// Default route redirects to English
app.get('/', (req, res) => {
    try {
        console.log('Root route accessed, redirecting to /en');
        res.redirect('/en');
    } catch (error) {
        console.error('Error in root route:', error);
        res.status(500).json({ error: 'Redirect failed' });
    }
});

// English routes
app.get('/en', (req, res, next) => {
    try {
        console.log('Rendering index-en');
        res.render('index-en', { 
            title: 'CoreDigify - Professional Web Development and WordPress Solutions',
            page: 'home',
            lang: 'en'
        });
    } catch (error) {
        console.error('Error in /en route:', error);
        next(error);
    }
});

app.get('/en/web-development', (req, res, next) => {
    try {
        console.log('Rendering webdev-en');
        res.render('webdev-en', { 
            title: 'Web Development - CoreDigify WordPress and Custom Websites',
            page: 'webdev',
            lang: 'en'
        });
    } catch (error) {
        console.error('Error in /en/web-development route:', error);
        next(error);
    }
});

app.get('/en/contact', (req, res, next) => {
    try {
        console.log('Rendering contact-en');
        res.render('contact-en', { 
            title: 'Contact Us - CoreDigify',
            page: 'contact',
            lang: 'en'
        });
    } catch (error) {
        console.error('Error in /en/contact route:', error);
        next(error);
    }
});

// Latvian routes
app.get('/lv', (req, res, next) => {
    try {
        console.log('Rendering index (LV)');
        res.render('index', { 
            title: 'CoreDigify - Profesionāla Web Lapu Izstrāde un WordPress Risinājumi',
            page: 'home',
            lang: 'lv'
        });
    } catch (error) {
        console.error('Error in /lv route:', error);
        next(error);
    }
});

app.get('/lv/web-izstrade', (req, res, next) => {
    try {
        console.log('Rendering webdev (LV)');
        res.render('webdev', { 
            title: 'Web Lapu Izstrāde - CoreDigify WordPress un Pielāgotās Vietnes',
            page: 'webdev',
            lang: 'lv'
        });
    } catch (error) {
        console.error('Error in /lv/web-izstrade route:', error);
        next(error);
    }
});

app.get('/lv/kontakti', (req, res, next) => {
    try {
        console.log('Rendering contact (LV)');
        res.render('contact', { 
            title: 'Sazināties ar Mums - CoreDigify',
            page: 'contact',
            lang: 'lv'
        });
    } catch (error) {
        console.error('Error in /lv/kontakti route:', error);
        next(error);
    }
});

// Legacy redirects
app.get('/web-izstrade', (req, res) => {
    res.redirect('/lv/web-izstrade');
});

app.get('/kontakti', (req, res) => {
    res.redirect('/lv/kontakti');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    console.error('Error stack:', err.stack);
    console.error('Request URL:', req.url);
    console.error('Request method:', req.method);
    
    if (isProduction) {
        res.status(500).json({ 
            error: 'Internal Server Error',
            message: 'Something went wrong. Please try again later.'
        });
    } else {
        res.status(500).json({ 
            error: err.message,
            stack: err.stack,
            url: req.url
        });
    }
});

// 404 handler
app.use((req, res) => {
    console.log('404 - Route not found:', req.url);
    try {
        res.status(404).render('index-en', { 
            title: 'Page Not Found - CoreDigify',
            page: 'home',
            lang: 'en'
        });
    } catch (error) {
        console.error('Error rendering 404 page:', error);
        res.status(404).json({ 
            error: 'Page not found',
            url: req.url
        });
    }
});

module.exports = app;