import ProductItem from './ProductItem';
import { Product } from '../types/product';

export interface ProductsProps {
  data: Product[];
}

const Products = ({ data }: ProductsProps) => (
  <ul className="grid grid-cols-3 gap-x-16 gap-y-10">
    {data.map((item, index) => (
      <ProductItem key={item.objectID} isBig={index === 7} data={item} />
    ))}
  </ul>
);

export default Products;
