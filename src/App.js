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
                key = {datas.id}
                // passing object as prop
                // datas = {datas}

                // spreading object as prop
                {...datas}
                />

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


