import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { filterSelector } from '../redux/selectors/filter';
import { filterOptionsSelector } from '../redux/selectors/facet';
import { toggleTag } from '../redux/slice/filter';

const TagsFilter = () => {
  const dispatch = useDispatch();

  const { tagsOptions } = useSelector(filterOptionsSelector);
  const { tags } = useSelector(filterSelector);

  const handleTagClick = (item: string) => dispatch(toggleTag(item));

  return (
    <ul className="text-center">
      {tagsOptions.map((item) => (
        <li key={item.key} className="inline-block px-5 pb-2">
          <button
            className={classNames(
              'font-apercu text-[13px] tracking-[1.8px] uppercase',
              { 'opacity-50': item.value === 0 && !tags.includes(item.key) },
              { underline: tags.includes(item.key) }
            )}
            onClick={() => handleTagClick(item.key)}
            disabled={item.value === 0 && !tags.includes(item.key)}
          >
            {item.key}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TagsFilter;
