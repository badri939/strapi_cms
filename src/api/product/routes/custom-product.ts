export default {
  routes: [
    {
      method: 'GET',
      path: '/products/category/:category',
      handler: 'product.findByCategory',
      config: {
        auth: false,
      },
    },
  ],
};
