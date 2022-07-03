import defaultState from "./defaultState";
import {
  MAIN_PAGE,
  SET_BOOK_DATA,
  FETCH_DATA_PENDING,
  SET_SORT_VALUE,
  SORT,
} from "../_helpers/constants";
import {
  sortDateAsc,
  sortDateDesc,
  sortTitleAToZ,
  sortTitleZToA,
} from "../_helpers/sort";

const { SELECT_OPTION, TITLE_A_Z, TITLE_Z_A, DATE_DESC, DATE_ASC } = SORT;

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MAIN_PAGE:
      return {
        ...state,
        visibleHomeScreen: false,
      };
    case FETCH_DATA_PENDING:
      return {
        ...state,
        booksData: [],
        sortValue: SELECT_OPTION,
        isLoading: true,
      };
    case SET_BOOK_DATA:
      return {
        ...state,
        booksData: action.payload,
        isLoading: false,
      };

    case SET_SORT_VALUE:
      let booksdata = state.booksData;
      switch (action.payload) {
        case TITLE_A_Z:
          booksdata = state.booksData.sort(sortTitleAToZ);
          break;
        case TITLE_Z_A:
          booksdata = state.booksData.sort(sortTitleZToA);
          break;
        case DATE_DESC:
          booksdata = state.booksData.sort(sortDateDesc);
          break;
        case DATE_ASC:
          booksdata = state.booksData.sort(sortDateAsc);
          break;
        default:
      }
      return {
        ...state,
        booksData: booksdata,
        sortValue: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;