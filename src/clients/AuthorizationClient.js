import axios from "axios";
 
const URL = "http://localhost:8082/auth/token?user=John&password=1234";
 
const obtenerToken = async () => {
    const token = await axios.get(`${URL}`).then(r => r.data);
    console.log(token.accessToken);
    return token.accessToken;
}
 
export const obtenerTokenFachada = async () => {
    return await obtenerToken();
}

