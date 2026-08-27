import express from 'express'
import routesFarm from './RoutesFarm.js'

const routes = (app) =>{
    app.route('/').get((req, res)=>{
        let message = `Seja bem vindo, servidor ok!`
        res.status(200).json(message)
    })
    app.use(express.json(), routesFarm) // colocar routes penssamentos depos)
}
export default routes;