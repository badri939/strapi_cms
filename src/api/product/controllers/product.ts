/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
	async findByCategory(ctx) {
		const rawCategory = String(ctx.params.category || '').trim();
		const normalizedCategory = rawCategory.toLowerCase();

		if (!rawCategory) {
			return ctx.badRequest('Category is required');
		}

		const categoryAliases: Record<string, 'Kurthis' | 'Sarees' | 'Lehenga'> = {
			kurthi: 'Kurthis',
			kurthis: 'Kurthis',
			saree: 'Sarees',
			sarees: 'Sarees',
			lehenga: 'Lehenga',
			lehengas: 'Lehenga',
		};

		const matchedCategory = categoryAliases[normalizedCategory];

		if (!matchedCategory) {
			return ctx.badRequest('Invalid category');
		}

		const sanitizedQuery = await this.sanitizeQuery(ctx);
		const existingFilters =
			typeof sanitizedQuery.filters === 'object' && sanitizedQuery.filters !== null
				? sanitizedQuery.filters
				: {};

		sanitizedQuery.filters = {
			...existingFilters,
			category: {
				$eq: matchedCategory,
			},
		};

		const { results, pagination } = await strapi
			.service('api::product.product')
			.find(sanitizedQuery);

		const sanitizedResults = await this.sanitizeOutput(results, ctx);

		return this.transformResponse(sanitizedResults, { pagination });
	},
}));
