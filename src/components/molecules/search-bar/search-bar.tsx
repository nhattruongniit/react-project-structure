import { Input } from '../../atoms/input';

import './search-bar.scss';

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="searchBar_content">
        <svg
          className="searchBar_icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <Input />
    </div>
  );
}

export default SearchBar;
