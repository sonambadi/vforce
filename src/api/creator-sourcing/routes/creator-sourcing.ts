export default {
  routes: [
    {
      method: 'GET',
      path: '/creator-sourcing',
      handler: 'creator-sourcing.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

