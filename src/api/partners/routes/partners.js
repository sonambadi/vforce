'use strict';

module.exports = {
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

