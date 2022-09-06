import { createContext, useContext, useState } from 'react';
import { getRespRequest } from '../api/Resp.api';


export const useResp = () => {
    const context = useContext(RespContext);
    if(!context)
        throw new Error('No existe el contexto');

    return context;
}

export const RespContext = createContext();

export const RespContextProvider = ({ children }) => {
    const [resp, setResp] = useState([]);
    const [respuestas, setRespuestas] = useState([]);

    async function obtenerPreguntas(){
        const response = await getRespRequest();
        setResp(response.data[0]);
        setRespuestas(resp.map(respuesta => console.log(respuesta.respuesta)))
        console.log(`Contenido de respuestas: ${respuestas}`);
    }

    return (
        <RespContext.Provider value={{ resp, respuestas, obtenerPreguntas }}>
            {children}
        </RespContext.Provider>
    )
}