function Card(props) {
    // applying condition to use badges
    let badgeText
    if (props.openSpots == 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location == 'Online') {
        badgeText = 'Online'
    }
    return (
        <div className = 'card'>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src = {`../img/${props.coverImg}`} className = 'card-image' />

            <div className = 'card-stats'>
                <img src = '../img/star.png' className = 'card-star' />
                <span>{props.stats.rating}</span>
                <span className = 'gray'>({props.stats.reviewCount}) &#8226;  </span>
                <span className = 'gray'> {props.location}</span>
            </div>

            <p className="card-title">{props.title}</p>
            <p className="card-price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}

export default Card
