import {Header} from './componets/Header.js'
import {Cuerpo} from './componets/Cuerpo.js'
import '../app.css'

export const App = () => {
  

  return (
    <>
      <div className="w-full h-screen app">
        <Header />
        <Cuerpo />
      </div>
      
    </>
  )
}

export default App
