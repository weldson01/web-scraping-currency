import run from "../scraping/pup"

class CurrencyController {
    async getCurrencyValue(req: any, res: any) {
        const { from, to } = await req.params
        const result = await run(from, to)
        res.json(result)
    }
}

export default CurrencyController