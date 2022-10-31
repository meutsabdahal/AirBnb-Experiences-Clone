import './css/styles.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './data'

function App() {
    // mapping data to components
    const dataElements = data.map(datas => {
        return (
            <Card 
                img = {datas.coverImg} 
                rating = {datas.stats.rating}
                reviewCount = {datas.stats.reviewCount} 
                country = {datas.location} 
                title = {datas.title} 
                price = {datas.price} />

        )
    })

    return (
      <>
      <NavBar />
      <Hero />
      <section className='cards-list'>
          {dataElements}
      </section>

      </>
    )

}

export default App


