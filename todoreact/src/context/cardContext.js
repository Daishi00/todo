import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <CardContext.Provider value={{ tasks }}>{children}</CardContext.Provider>
  );
}

export default CardContext;
