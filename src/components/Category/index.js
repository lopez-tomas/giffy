import { Link } from "wouter";

import "components/Category/styles.css";

export default function Category({ name, options = [] }) {
  //<h3 className="Category-title">{name}</h3>
  return (
    <div className='Category'>
      <ul className="Category-list">
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
