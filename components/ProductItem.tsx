import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import classNames from 'classnames';
import { Product } from '../types/product';
import { likesSelector } from '../redux/selectors/likes';
import { toggleLike } from '../redux/slice/likes';
import likeEmptyBlack from '../assets/like-empty-black.svg';
import likeFillBlack from '../assets/like-fill-black.svg';

export interface ProductItemProps {
  data: Product;
  isBig: boolean;
}

const ProductItem = ({ data, isBig }: ProductItemProps) => {
  const dispatch = useDispatch();

  const { likes } = useSelector(likesSelector);

  const isLiked = likes.includes(data.objectID);

  const handleLikeClick = () => dispatch(toggleLike(data.objectID));

  return (
    <li className={classNames({ 'row-span-2 col-span-2': isBig })}>
      <div
        className={classNames('relative mb-6 pb-[100%]', {
          'pt-[1.5rem]': isBig,
        })}
      >
        <picture>
          <img
            className="absolute top-0 left-0 right-0 bottom-0 m-auto min-h-full min-w-full"
            src={data.image}
            alt=""
          />
        </picture>
        <button className="absolute top-6 right-6" onClick={handleLikeClick}>
          <Image src={isLiked ? likeFillBlack : likeEmptyBlack} alt="Like" />
        </button>
      </div>
      <div className="flex justify-between text-[13px] leading-5 text-color-[#1c1c1c]">
        <div
          className={
            isBig
              ? 'font-europa tracking-[2.2px] text-sm'
              : 'font-apercu tracking-[1.8px] uppercase'
          }
        >
          {data.title}
        </div>
        <div className="font-europa tracking-[3.2px]">€{data.price}</div>
      </div>
    </li>
  );
};

export default ProductItem;
