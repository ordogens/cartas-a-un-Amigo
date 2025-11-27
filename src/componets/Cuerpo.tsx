import {datos} from "./arrays/ordogen"
import {data} from "./arrays/Jean"

export const Cuerpo = () => {
  return (
    <div className="w-full h-[93%] flex">
        <div className="w-1/2 h-full border-r flex flex-col pr-4 gap-3 items-center pt-4">
            <p className="text-3xl font-bold">ordogen</p>
        {datos.map((item) => (
            <div key={item.id} className="w-100 h-80 bg-red-600 rounded-sm">
                <p>{item.carta}</p>
            </div>
        ))}
        
        </div>
        <div className="w-1/2 h-full flex flex-col items-center pr-4 pt-4 gap-3">
            <p className="text-3xl font-bold">Jean</p>
        {data.map((item) => (
            <div key={item.id} className="w-100 h-80 bg-red-600 rounded-sm">
                <p>{item.carta}</p>
            </div>
        ))}
        
        </div>
      
    </div>
  )
}
