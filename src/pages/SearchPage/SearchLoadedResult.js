

import React from "react";
import LoadNews from "../../components/LoadNews/LoadNews";

function SearchLoadedResult(props) {
    return (
        <div className={"allnews--container"}>
            <ul className={"newsitem--container"}>
                <LoadNews
                    key={props.search_input}
                    newsUrl={props.search_input}
                />
            </ul>
        </div>
    );
}

export default SearchLoadedResult;
