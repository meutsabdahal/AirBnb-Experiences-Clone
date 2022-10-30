import './css/styles.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

import Katie from './img/Katie-Zaferes.png'

function App() {
    return (
      <>
      <NavBar />
      <Hero />
      <Card
          img = {Katie}
          rating = '5.0'
          reviewCount = {6}
          country = 'USA'
          title = 'Life lessons with Katie Zaferes'
          price = {136}
      />

      </>
    )

}

export default App


