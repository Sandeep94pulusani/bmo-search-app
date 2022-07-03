import Card from "./card";
import "./styles.css";
import { SORT } from "../../_helpers/constants";

const Books = (props) => {
  const { data, setSortValue } = props;
  const { booksData, sortValue } = data;
  const { SELECT_OPTION, TITLE_A_Z, TITLE_Z_A, DATE_DESC, DATE_ASC } = SORT;

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
  };
  return (
    <div className="card-showcase">
      {booksData.length > 0 ? (
        <>
          <div className="sort-container">
            <select value={sortValue} onChange={handleSelectChange}>
              <option value={SELECT_OPTION}>Sort By Option</option>
              <option value={TITLE_A_Z}>Title: A - Z</option>
              <option value={TITLE_Z_A}>Title: Z - A</option>
              <option value={DATE_DESC}>Date: Current - Past</option>
              <option value={DATE_ASC}>Date: Past - Current</option>
            </select>
          </div>
          {booksData.map((book, id) => (
            <div key={`${id}-${book.title}`} className="container-box">
              <Card book={book} />
            </div>
          ))}
        </>
      ) : (
        "No Results found"
      )}
    </div>
  );
};

export default Books;