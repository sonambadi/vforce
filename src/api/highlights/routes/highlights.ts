export default {
  routes: [
    {
      method: 'GET',
      path: '/highlights',
      handler: 'highlights.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

