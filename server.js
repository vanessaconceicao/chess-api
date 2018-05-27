import express from 'express'
import calculatePositions from './calculatePositions'

const app = express()

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

app.get('/api/move', (req, res) => {
    const initialPosition = 'D4' //req.position
    let nextPositions = calculatePositions(initialPosition)
    console.log(nextPositions)
    res.sendStatus(200)
})
