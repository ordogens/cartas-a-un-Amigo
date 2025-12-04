import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  variant: "ordogen" | "jean";
}

export const Accordion = ({ title, children, variant }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor =
    variant === "ordogen"
      ? "rojo"
      : "azul";

  return (
    <section
      className={`w-[90%] border border-gray-400 rounded-xl ${bgColor}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 cursor-pointer rounded-xl"
      >
        <span className="text-xl font-bold letra text-gray-200 italic">{title}</span>
        <span className="text-2xl text-gray-400">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] p-6 overflow-y-hidden italic"
            : "max-h-0 p-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </section>
  );
};
