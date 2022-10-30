import GridImage from '../img/grid-images.png'

function Hero() {
    return (
        // adding images and description
        <section className = 'hero'>
            <img src = {GridImage} className = 'grid-images' />

            <h1 className = 'hero-header'>Online Experiences</h1>
            <p className = 'hero-text'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default Hero