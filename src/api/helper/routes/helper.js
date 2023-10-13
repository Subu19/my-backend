'use strict';

/**
 * helper router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::helper.helper');
