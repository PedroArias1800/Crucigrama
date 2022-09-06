import axios from 'axios'

export const getRespRequest = async () =>
    await axios.get('http://localhost:3001/getpreguntas');