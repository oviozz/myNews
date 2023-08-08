
function NewsCard(props){
    return (
        <div className="news--items">
            <img className="news--img" src={props.imageUrl === 'None' ? '/no_img.jpg' : props.imageUrl} alt={""}/>

                <div className="news--info">
                    <h2 className="news--headline">{props.title}</h2>
                    <p className="news--description">{props.description}</p>
                </div>
        </div>
    )
}


export default NewsCard;