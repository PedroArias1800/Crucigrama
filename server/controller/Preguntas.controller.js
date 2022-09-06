import pool from '../db.js';

export const getPreguntas = async (req, res) => {
    try {
        const respuesta = await pool.query('SELECT * FROM preguntas');
        console.log(respuesta);

        res.json(respuesta);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}