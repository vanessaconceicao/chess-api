import express from 'express';

const app = express()

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})

app.get('/api/move', (req, res) => {
    console.log('Get movement')
    res.sendStatus(200)
})
