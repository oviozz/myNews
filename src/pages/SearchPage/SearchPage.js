
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PopularBarData from "./PopularBarData";
import HistoryBar from "./HistoryBar";
import SearchLoadedResult from "./SearchLoadedResult";

function SearchPage() {

    const [searchContent, setSearchContent] = useState(null);

    const handleSearch = (user_search) => {
        setSearchContent(user_search);
    };

    return (
        <div className="searchpage--container">
            <SearchBar user_value={searchContent} onSearch={handleSearch} />
            {searchContent ?
                <SearchLoadedResult search_input={searchContent} /> :
                <>
                    <PopularBarData onSearch={handleSearch}/>
                    <HistoryBar />
                </>
            }
        </div>
    );
}

export default SearchPage;
