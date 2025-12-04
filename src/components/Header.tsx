import "./header.css"

export const Header = () => {
  return (
    <div className="w-full h-[15%] header flex items-center justify-center flex-col text-[#a3835f] text-shadow-lg text-shadow-black">
      <p className="font-bold text-5xl -tracking-tighter bg-black/30 p-2 rounded-lg">Dialogos en la penumbra</p>
      <p className="font-extrabold text-xl text-[#a3835f] -tracking-tight bg-black/50 mt-2 px-4 rounded-lg">Correspondencia filosofica entre Ordogen y Jean Pierre</p>
    </div>
  )
}


