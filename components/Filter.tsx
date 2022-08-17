import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Image from 'next/image';
import { filterSelector } from '../redux/selectors/filter';
import { filterOptionsSelector } from '../redux/selectors/facet';
import {
  toggleColor,
  togglePriceRange,
  clearFilter,
} from '../redux/slice/filter';
import closeIcon from '../assets/close.svg';

const Filter = () => {
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);

  const { colorsOptions, priceOptions } = useSelector(filterOptionsSelector);
  const { colors, priceRange } = useSelector(filterSelector);

  const handleColorClick = (item: string) => dispatch(toggleColor(item));
  const handlePriceClick = (item: string) => dispatch(togglePriceRange(item));
  const handleClearFilterClick = () => dispatch(clearFilter());
  const handleFilterClick = () => setIsOpened(!isOpened);
  const handleCloseClick = () => setIsOpened(false);

  const filterOptions = (
    options: Array<{ key: string; value: number }>,
    state: string[],
    callBack: Function
  ) => (
    <ul>
      {options.map((item) => (
        <li key={item.key} className="inline-block px-5 pb-2">
          <button
            className={classNames(
              'font-apercu text-[13px] tracking-[1.8px] uppercase',
              { 'opacity-50': item.value === 0 && !state.includes(item.key) },
              { underline: state.includes(item.key) }
            )}
            onClick={() => callBack(item.key)}
            disabled={item.value === 0 && !state.includes(item.key)}
          >
            {item.key}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative font-apercu text-[13px] tracking-[1.8px] uppercase">
      <button
        className={classNames('tracking-[1.8px] uppercase', {
          underline: isOpened,
        })}
        onClick={handleFilterClick}
      >
        FILTERS
      </button>

      <div
        className={classNames(
          'absolute w-[600px] top-10 right-0 z-10 bg-white',
          { hidden: !isOpened }
        )}
      >
        <div className="text-right p-5">
          <button
            className="tracking-[1.8px] uppercase mr-5"
            onClick={handleClearFilterClick}
          >
            Clear filter
          </button>

          <button onClick={handleCloseClick}>
            <Image src={closeIcon} alt="Close" />
          </button>
        </div>

        <div className="grid grid-cols-5 px-16 pb-6">
          <div>Colour</div>
          <div className="col-span-4">
            {filterOptions(colorsOptions, colors, handleColorClick)}
          </div>
        </div>

        <div className="grid grid-cols-5 px-16 py-6">
          <div>Price</div>
          <div className="col-span-4">
            {filterOptions(priceOptions, priceRange, handlePriceClick)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
