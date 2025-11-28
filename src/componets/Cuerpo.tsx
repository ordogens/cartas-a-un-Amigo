import {datos} from "./arrays/ordogen"
import {data} from "./arrays/jean"
import "./cuerpo.css"

export const Cuerpo = () => {
  return (
    <div className="w-full max-h-[85%] flex flex-now overflow-y-scroll">
        <div className="w-1/2 h-full flex flex-col pb-6 gap-8 items-center pt-4 ">
            <p className="text-4xl font-bold letra">Ordogen</p>
        {datos.map((item) => (
            <div key={item.id} className="w-150 h-100 rojo rounded-sm flex items-center flex-col p-1 ">
                <p className="text-[#b28c64] text-3xl letra">{item.titulo}</p>
                <p>{item.fecha}</p>
                <p className="carta">{item.carta}</p>
            </div>
        ))}
        
        </div>
        <div className="w-1/2 h-full flex flex-col items-center pb-4 pt-4 gap-8 ">
            <p className="text-4xl font-bold letra">Jean</p>
        {data.map((item) => (
            <div key={item.id} className="w-150 h-100 azul rounded-sm flex items-center flex-col p-1 ">
                <p className="text-[#b28c64] text-3xl letra">{item.titulo}</p>
                <p>{item.fecha}</p> 
                <p className="carta">{item.carta}</p>
            </div>
        ))}
        
        </div>
      
    </div>
  )
}
