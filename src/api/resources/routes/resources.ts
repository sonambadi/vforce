export default {
  routes: [
    {
      method: 'GET',
      path: '/resources',
      handler: 'resources.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};


