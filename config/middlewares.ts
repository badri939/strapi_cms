export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '100mb',
      formLimit: '100mb',
      textLimit: '100mb',
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // 100MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
