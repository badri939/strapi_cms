import type { Schema, Struct } from '@strapi/strapi';

export interface ProductProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

export interface ProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'Size';
    icon: 'expand';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<
      ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Free Size']
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.product': ProductProduct;
      'product.size': ProductSize;
    }
  }
}
