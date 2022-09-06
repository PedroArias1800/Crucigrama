import { Router } from 'express';
import { getPreguntas } from '../controller/Preguntas.controller.js';

const router = Router();

router.get('/getpreguntas', getPreguntas)

export default router;
