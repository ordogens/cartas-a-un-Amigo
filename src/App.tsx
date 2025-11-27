import {Header} from './componets/Header.js'
import {Cuerpo} from './componets/Cuerpo.js'

export const App = () => {
  

  return (
    <>
      <div className="w-full h-screen bg-[#ccc]">
        <Header />
        <Cuerpo />
      </div>
      
    </>
  )
}

export default App
