function Card(props) {
    // applying condition to use badges
    let badgeText
    if (props.datas.openSpots == 0) {
        badgeText = 'SOLD OUT'
    } else if (props.datas.location == 'Online') {
        badgeText = 'Online'
    }
    return (
        <div className = 'card'>
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src = {`../img/${props.datas.coverImg}`} className = 'card-image' />

            <div className = 'card-stats'>
                <img src = '../img/star.png' className = 'card-star' />
                <span>{props.datas.stats.rating}</span>
                <span className = 'gray'>({props.datas.stats.reviewCount}) &#8226;  </span>
                <span className = 'gray'> {props.datas.location}</span>
            </div>

            <p className="card-title">{props.datas.title}</p>
            <p className="card-price"><b>From ${props.datas.price}</b> / person</p>
        </div>
    )
}

export default Card
