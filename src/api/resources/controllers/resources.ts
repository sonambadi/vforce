/**
 * resources controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::resources.resources', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::resources.resources', {
      ...query,
      populate: {
        testimonials: {
          populate: {
            video: true,
            poster: true,
            companyLogo: true
          }
        },
        caseStudies: {
          populate: {
            image: true,
            pdf: true
          }
        }
      }
    });

    return entity;
  }
}));


