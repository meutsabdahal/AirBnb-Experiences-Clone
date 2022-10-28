import GridImage from '../img/grid-images.png'

function Hero() {
    return (
        <>
        <img src = {GridImage} className = 'grid--images' />

        <h2>Online Experiences</h2>
        <p className = 'online-experiences-desc'>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        </>
    )
}

export default Hero