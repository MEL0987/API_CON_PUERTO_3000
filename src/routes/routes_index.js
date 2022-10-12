//rutas
const { Router } = require('express')
const router = Router()

router.get('/test', (req, res) => {
    const data = {
        "name": "Adrian",
        "website": "PhenyxComputer.com"
    }
    res.json(data)
})


module.exports = router