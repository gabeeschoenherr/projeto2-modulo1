import { createContext, useContext, useState } from "react";

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {
    const [logadoInfo, setLogadoInfo] = useState(false)
    return(
        <LogadoContext.Provider value={{logadoInfo, setLogadoInfo}}>
            {children}
        </LogadoContext.Provider>
    )
}

const useLogado = () => {
    return useContext(LogadoContext);
}

export {LogadoProvider, useLogado, LogadoContext}

