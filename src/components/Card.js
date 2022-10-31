function Card(props) {
    return (
        <div className = 'card'>
            <img src = {`../img/${props.img}`} className = 'card-image' />

            <div className = 'card-stats'>
                <img src = '../img/star.png' className = 'card-star' />
                <span>{props.rating}</span>
                <span className = 'gray'>({props.reviewCount}) &#8226;  </span>
                <span className = 'gray'> {props.country}</span>
            </div>

            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}

export default Card
