import './css/styles.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './data'

function App() {
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
      {/* <Card
          img = {Katie}
          rating = '5.0'
          reviewCount = {6}
          country = 'USA'
          title = 'Life lessons with Katie Zaferes'
          price = {136}
      /> */}
      {dataElements}

      </>
    )

}

export default App


