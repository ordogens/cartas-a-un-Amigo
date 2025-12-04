import {datos} from "../data/ordogen";
import {data} from "../data/jean";
import "./cuerpo.css";
import { Accordion } from "./Accordion";

export const Cuerpo = () => {
  return (
    <div className="w-full max-h-[85%] flex overflow-y-auto">
      
      {/* Ordogen */}
      <div className="w-1/2 h-full flex flex-col pb-6 gap-4 items-center pt-4 overflow-y-auto">
        <p className="text-4xl font-bold letra">Ordogen</p>

        {datos.map((item) => (
          <Accordion
            key={item.id}
            title={item.titulo}
            variant="ordogen"
          >
            <p className="text-gray-400 text-xs">{item.fecha}</p>
            <p className="carta">{item.carta}</p>
          </Accordion>
        ))}
      </div>

      {/* Jean */}
      <div className="w-1/2 h-full flex flex-col items-center pb-4 pt-4 gap-4 overflow-y-auto">
        <p className="text-4xl font-bold letra">Jean</p>

        {data.map((item) => (
          <Accordion
            key={item.id}
            title={item.titulo}
            variant="jean"
          >
            <p className="text-gray-400 text-xs">{item.fecha}</p>
            <p className="carta">{item.carta}</p>
          </Accordion>
        ))}
      </div>

    </div>
  );
};
