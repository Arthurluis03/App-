import e from "express";
import ControllersFarm from "../Controllers/ControllersFarm.js";


const routesFarm = e.Router()

routesFarm.get('/Farm', ControllersFarm.VerLista_Farm);
routesFarm.post('/Farm/Registrar', ControllersFarm.Criar_Farm_Frutos);
routesFarm.delete('/Farm/Delete', ControllersFarm.Deletar_Farm_Frutos)
routesFarm.put('/Farm/Editar', ControllersFarm.Editar_Farm_Frutos)
routesFarm.get('/Farm/Busca', ControllersFarm.Procurar_Farm_Frutos)
export default routesFarm