import express from 'express'
import calculatePositions from './calculatePositions'

const app = express()

app.set('port', process.env.PORT || 3001)

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

app.get('/api/move', (req, res) => {
  const initialPosition = req.query.position
  let nextPositions = calculatePositions(initialPosition)

  if (nextPositions) res.send(nextPositions)
  else {
    res.statusMessage =
      'The initial position must be in Algebraic notation, A to H and 1 to 8'
    res.status(400).end()
  }
})
