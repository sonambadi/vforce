export default {
  routes: [
    {
      method: 'GET',
      path: '/partners',
      handler: 'partners.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

