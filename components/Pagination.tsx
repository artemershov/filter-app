import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { filterSelector } from '../redux/selectors/filter';
import { setPage } from '../redux/slice/filter';

export interface PaginationProps {
  total: number;
}

const Pagination = ({ total }: PaginationProps) => {
  const dispatch = useDispatch();
  const { page } = useSelector(filterSelector);

  const handlePageClick = (page: number) => dispatch(setPage(page));

  return (
    <ul className="text-center">
      {Array.from({ length: total }).map((_, index) => (
        <li key={index} className="inline">
          <button
            className={classNames('p-2 m-2 font-europa text-sm', {
              underline: page === index,
            })}
            onClick={() => handlePageClick(index)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
