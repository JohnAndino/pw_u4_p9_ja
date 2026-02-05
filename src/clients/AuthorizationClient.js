import axios from "axios";
 
const URL = "http://localhost:8082/matricula/api/v1.0/autorizacion/token?user=John&password=1234";
 
const obtenerToken = async () => {
    const token = await axios.get(`${URL}`).then(r => r.data);
    console.log(token);
    return token.token;
}
 
export const obtenerTokenFachada = async () => {
    return await obtenerToken();
}

