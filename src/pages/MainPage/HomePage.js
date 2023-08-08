
import React from "react";
import LoadNews from "../../components/LoadNews/LoadNews";


function HomePage(){

    return (
        <div className={"allnews--container"}>
            <ul className={"newsitem--container"}>{<LoadNews newsUrl={''} />}</ul>
        </div>
    );

}

export default HomePage