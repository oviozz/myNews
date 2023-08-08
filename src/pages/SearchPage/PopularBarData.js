import PopularBar from "./PopularBar";


function PopularBarData({ onSearch }){

    const categories = [
        "Sports",
        "Education",
        "Health",
        "Religion",
        "Technology",
        "Food",
        "Travel",
        "Fashion",
        "Entertainment",
        "Science",
        "Business",
        "Music",
        "Fitness",
        "Art",
        "History",

    ];

    function DataBtn(topic){
        onSearch(topic);
    }

    const categoryItems = categories.map((topic) => {
        return <li className="popular--items" key={topic} onClick={ () => DataBtn(topic) }>{topic}</li>
    })

    return <PopularBar popularCategories={categoryItems}/>
}

export default PopularBarData;