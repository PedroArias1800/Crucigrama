import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import router from './routes/Preguntas.routes.js';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router);

app.listen(PORT || 3000)
console.log(`Servidor levantado en el puerto`, PORT || 3000)