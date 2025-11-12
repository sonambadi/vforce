'use strict';

/**
 * creator-sourcing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::creator-sourcing.creator-sourcing', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service('api::creator-sourcing.creator-sourcing').find({
      ...query,
      populate: {
        hero_video: true,
        ugc_features: true,
        ugc_image: true,
        influencer_features: true,
        influencer_image: true,
        influencer_video: true,
        influencer_video_poster: true,
        viral_features: true,
        viral_image: true,
        build_logo: true,
        metrics: true,
        case_studies: {
          populate: {
            logo: true
          }
        }
      }
    });

    return { data: entity };
  }
}));

