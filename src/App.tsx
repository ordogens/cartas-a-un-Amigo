import {Header} from './components/Header.tsx'
import {Cuerpo} from './components/Cuerpo.tsx'
import './app.css'

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
