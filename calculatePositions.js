export let firstTurnPositions = []
let secondTurnPositions = []

const possibleMoves = [
    { x: -2, y: -1 },
    { x: -2, y: +1 },
    { x: +2, y: -1 },    
    { x: +2, y: +1 },    
    { x: -1, y: -2 },    
    { x: -1, y: +2 },    
    { x: +1, y: -2 },    
    { x: +1, y: +2 }
]

export default function findSecondTurnPositions(initialPosition) {
    console.log('Find positions')

    const initialCoord = convertPositionToCoords(initialPosition)
    calculateNextPositions(initialCoord)

    return secondTurnPositions
}

export function convertPositionToCoords (position) {
    position = {x: position[0], y: Number(position[1])}

    switch (position.x) {
        case 'A': 
            position.x = 1
            return position
        case 'B': 
            position.x = 2
            return position
        case 'C': 
            position.x = 3
            return position
        case 'D': 
            position.x = 4
            return position
        case 'E': 
            position.x = 5
            return position
        case 'F': 
            position.x = 6
            return position
        case 'G': 
            position.x = 7
            return position
        case 'H': 
            position.x = 8
            return position
    }
}

export function calculateNextPositions (initialCoord) {
    console.log(initialCoord)

    possibleMoves.forEach((move) => {
        let position = {}
        position.x = initialCoord.x + move.x
        position.y = initialCoord.y + move.y
        firstTurnPositions.push(position)
    })

    console.log(firstTurnPositions)
}
