
function NewsCard(props){
    return (
        <a className="news--items" href={props.url} target={"_blank"} rel="noopener noreferrer">
            <div className="news--content">
                <img className="news--img" src={props.imageUrl === 'None' ? '/no_img.jpg' : props.imageUrl} alt={""}/>

                <div className="news--info">
                    <h2 className="news--headline">{props.title}</h2>
                    <p className="news--description">{props.description}</p>
                </div>
            </div>
        </a>
    )
}


export default NewsCard;