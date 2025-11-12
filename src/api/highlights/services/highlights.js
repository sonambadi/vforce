'use strict';

/**
 * highlights service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::highlights.highlights');

