// sitemap-generator.js
const Sitemap = require("react-router-sitemap").default;
const path = require("path");

// Define your routes manually (based on App.js)
const routes = [
  "/",
  "/about-me",
  "/projects",
  "/projects/:id",   // dynamic
  "/blogs",
  "/blogs/:id",      // dynamic
  "/vlogs",
  "/gallery",
  "/contact-me"
];

// Create and save sitemap.xml inside public/
function generateSitemap() {
  return new Sitemap(routes)
    .build("https://yourdomain.com") // replace with your real domain
    .save(path.resolve(__dirname, "public", "sitemap.xml"));
}

generateSitemap();
