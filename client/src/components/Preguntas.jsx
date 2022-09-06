import { useEffect, useState } from "react";
import { useResp } from "../context/RespContext.jsx";
import IngresarPalabra from "./IngresarPalabra.jsx";

function Preguntas() {
  const { resp, obtenerPreguntas } = useResp();
  const [ respuestas, setRespuesta ] = useState([]);

  useEffect(() => {
    obtenerPreguntas();
    console.log(resp)
  }, []);

  return (
    <div className="d-block col col-4">
        <div className="overflow-auto fs-5" style={{height: '420px', 'text-align': 'justify', 'padding-right': '2%'}}>
        {
            resp.map(respuesta => (
            <p key={respuesta.id_pregunta}>{respuesta.id_pregunta}. {respuesta.pregunta}</p>))

        }
        </div>
        <IngresarPalabra/>
    </div>
  );
}

export default Preguntas;
