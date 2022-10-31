function Card(props) {
    let badgeText
    if (props.openSpots == 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location == 'Online') {
        badgeText = 'Online'
    }
    return (
        <div className = 'card'>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src = {`../img/${props.img}`} className = 'card-image' />

            <div className = 'card-stats'>
                <img src = '../img/star.png' className = 'card-star' />
                <span>{props.rating}</span>
                <span className = 'gray'>({props.reviewCount}) &#8226;  </span>
                <span className = 'gray'> {props.location}</span>
            </div>

            <p className="card-title">{props.title}</p>
            <p className="card-price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}

export default Card
