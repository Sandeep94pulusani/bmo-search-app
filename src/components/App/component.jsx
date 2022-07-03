import "./styles.css";
import HomeScreen from "../HomeScreen";
import Books from "../Books";
import Loading from "../Loading";
import {useState} from "react";


const MainPage = (props) => {
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState(false);

    const { data, setMainPage, fetchSearchData } = props;
    const { visibleHomeScreen, isLoading } = data;

    const handleSubmit = () => {
      if(value.length > 0) {
        setErrors(false);
        setMainPage();
        const newValues = value.trim().replaceAll(" ", "+");
        fetchSearchData(newValues);
      }
      else {
        setErrors(true);
      }
    };

    return (
    <div className="container">
    <div className="wrapper">
        <h1>Book Search App</h1>
        <div className="form">
            {errors && <p className="error-message">Required</p>}
            <input
                className="input-text"
                autoFocus
                placeholder="Enter book name..."
                type="text"
                id="book-search"
                aria-label="book-search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
            />
            <input
                type="button"
                className="input-button"
                value="search"
                onClick={handleSubmit}
            />
          {/* for responsive button */}
          <button className="btn-play" onClick={handleSubmit} >
          <i className="btnplaylist"></i>
          </button>
        </div>

        <div className="clear" />
      {/* Display info screen for the first time */}
      {visibleHomeScreen ? (
        <HomeScreen />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Books {...props} />
      )}
    </div>
        </div>
)};

export default MainPage;