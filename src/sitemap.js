const sitemap = require('sitemap');
const hostname = 'http://nightcat9.github.io/Invention-Group/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/expertise', changefreq: 'monthly', priority: 0.8 },
  { url: '/process', changefreq: 'monthly', priority: 0.8 },
  { url: '/faq', changefreq: 'monthly', priority: 0.8 },
  { url: '/reviews', changefreq: 'monthly', priority: 0.8 },
  { url: '/careers', changefreq: 'monthly', priority: 0.8 },
  { url: '/disclosure', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/login', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

