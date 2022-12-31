import express from 'express'
import router from './routes/index'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
