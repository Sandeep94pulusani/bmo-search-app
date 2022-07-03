import {
  MAIN_PAGE,
    SET_BOOK_DATA,
    FETCH_DATA_PENDING,
    SET_SORT_VALUE,
  } from "../_helpers/constants";
  
  import axios from "axios";
  
  export const setMainPage = () => {
    return {
      type: MAIN_PAGE,
    };
  };
  
  export const fetchDataPending = () => {
    return {
      type: FETCH_DATA_PENDING,
    };
  };
  
  export const setBookData = (data) => {
    return {
      type: SET_BOOK_DATA,
      payload: data,
    };
  };
  
  export const fetchSearchData = (title) => {
    return (dispatch) => {
      dispatch(fetchDataPending());
      const url = `https://openlibrary.org/search.json?q=${title}`;
  
      axios.get(url).then((response) => {
        if (response.status === 200) {
          const responseData = response.data.docs;
          let booksData = [];
  
          responseData.length > 0 &&
            responseData.map((data) => {
              const { title, author_name, publish_date, isbn } = data;
  
              if (title && author_name && publish_date && isbn) {
                const img_cover = isbn[0]
                  ? `https://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`
                  : null;
                const book = {
                  title: title,
                  author_name: author_name[0] || null,
                  img_cover,
                  publish_date: publish_date[0],
                };
                booksData.push(book);
              }
              return booksData;
            });
          dispatch(setBookData(booksData));
        } else {
          console.error("API failed");
        }
      });
    };
  };
  
  export const setSortValue = (data) => {
    return {
      type: SET_SORT_VALUE,
      payload: data,
    };
  };