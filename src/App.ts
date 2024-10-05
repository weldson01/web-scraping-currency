import express from "express"
import cors from "cors"
import routes from "./routes"

class App {
    server;
    constructor() {
        this.server = express()
        this.middleWares()
        this.routes()
    }
    middleWares() {
        this.server.use(cors())
    }
    routes() {
        this.server.use(routes)
    }
}

export default App