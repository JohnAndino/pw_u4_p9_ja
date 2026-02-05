import axios from "axios";
import { obtenerTokenFachada } from "../clients/AuthorizationClient.js";

const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";


const consultarTodos = async ()=>{
    const TOKEN = await obtenerTokenFachada();
    const data = axios.get(`${URL}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data)
    return data;
}

const consultarPorId = async () => {
    const TOKEN = await obtenerTokenFachada();
    const data = axios.get(`${URL}/${id}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data)
    return data;
}

const guardar = async (body) => {
    /*const objeto = {
        nombre:'John',
        apellido:'Andino'
    };*/

    //Dentro del metodo puede ir como parametros la URL, String Data y una configuracion la cual son los Headers 
    const TOKEN = await obtenerTokenFachada();
    const token = ""
    axios.post(`${URL}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    
    
   
} 

const actualizar = async (id, body) =>{
    const TOKEN = await obtenerTokenFachada();
    axios.put(`${URL}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, body) =>{
    const TOKEN = await obtenerTokenFachada();
    axios.patch(`${URL}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    console.log(data);
    return data;
}

const borrar = async (id) => {
    const TOKEN = await obtenerTokenFachada();
    axios.delete(`${URL}/${id}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
}
 


export const consultarTodosFachada = async ()=>{
    return await consultarTodos();
}

export const consultarPorIdFachada = async () => {
    return await consultarPorId();
}

export const guardarFachada = async (body) => {
    return await guardar(body);
} 

export const actualizarFachada = async (id, body) =>{
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) =>{
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    return await borrar(id);
}
 