'use strict';

/**
 * helper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::helper.helper');
