import { Router } from "express";
import CurrencyController from "./controllers/CurrencyController";

const routes = Router()
const currencyController = new CurrencyController

routes.get("/", (req, res) => {
    res.send("Server is on!")
})

routes.get("/currency/:from/:to", currencyController.getCurrencyValue)

export default routes