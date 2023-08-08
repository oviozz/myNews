

function PopularBar(props){

    return (
        <div className="popular--container">
            <h1 className="popular--title">📰 Popular</h1>
            <ul className="popular--lists">
                {props.popularCategories}
            </ul>
        </div>

    )


}


export default PopularBar;