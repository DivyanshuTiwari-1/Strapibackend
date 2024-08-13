'use strict';

/**
 * indeed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::indeed.indeed');
