const fs = require('fs');
const json = require('./miista-export.json');

const titles = [
  'Handle',
  'Title',
  'Body (HTML)',
  'Vendor',
  'Standardized Product Type',
  'Custom Product Type',
  'Tags',
  'Published',
  'Option1 Name',
  'Option1 Value',
  'Option2 Name',
  'Option2 Value',
  'Option3 Name',
  'Option3 Value',
  'Variant SKU',
  'Variant Grams',
  'Variant Inventory Tracker',
  'Variant Inventory Qty',
  'Variant Inventory Policy',
  'Variant Fulfillment Service',
  'Variant Price',
  'Variant Compare At Price',
  'Variant Requires Shipping',
  'Variant Taxable',
  'Variant Barcode',
  'Image Src',
  'Image Position',
  'Image Alt Text',
  'Gift Card',
  'SEO Title',
  'SEO Description',
  'Google Shopping / Google Product Category',
  'Google Shopping / Gender',
  'Google Shopping / Age Group',
  'Google Shopping / MPN',
  'Google Shopping / AdWords Grouping',
  'Google Shopping / AdWords Labels',
  'Google Shopping / Condition',
  'Google Shopping / Custom Product',
  'Google Shopping / Custom Label 0',
  'Google Shopping / Custom Label 1',
  'Google Shopping / Custom Label 2',
  'Google Shopping / Custom Label 3',
  'Google Shopping / Custom Label 4',
  'Variant Image',
  'Variant Weight Unit',
  'Variant Tax Code',
  'Cost per item',
  'Price / International',
  'Compare At Price / International',
  'Status',
];

const csv = json.data.allContentfulProductPage.edges.reduce((acc, data) => {
  const title = data.node.name;
  const handle = title.split(' ').join('-').toLowerCase();
  const price = data.node.shopifyProductEu.variants.edges[0].node.price;
  const tags = data.node.categoryTags
    ? data.node.categoryTags.length > 1
      ? `"${data.node.categoryTags.join(',')}"`
      : data.node.categoryTags[0]
    : '';
  const image = data.node.thumbnailImage.file.url
    ? `https:${data.node.thumbnailImage.file.url}`
    : '';

  const item = (data.node.colorFamily || [{ name: 'Not set' }])
    .map(({ name: color }) => [
      handle,
      title,
      '',
      'Shoes factory',
      'Apparel & Accessories > Clothing',
      'Shoes',
      tags,
      'TRUE',
      'Color',
      color,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      100,
      'deny',
      'manual',
      price,
      price,
      'TRUE',
      'TRUE',
      '',
      image,
      1,
      '',
      'FALSE',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'g',
      '',
      price,
      price,
      price,
      'active',
    ])
    .map((variant) => variant.join(','))
    .join('\n');

  return acc + '\n' + item;
}, titles.join(','));

fs.writeFileSync('products.csv', csv);
