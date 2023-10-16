module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "cdn.jsdelivr.net",
            "strapi.io",
            "http:",
            "https:",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:3000",
        "https://me.subasacharya.com.np",
        "http://192.168.31.130:3000",
        "https://mybackend.subasacharya.com.np",
        "http://localhost:1337",
        "https://portfolio.subasacharya.com.np",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
