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

    let firstTurnCoords = []
    let secondTurnCoords = []

    const initialCoord = convertPositionToCoords(initialPosition)
    
    firstTurnCoords = calculateNextPositions(initialCoord)
    firstTurnCoords = removeInvalidValues(firstTurnCoords)

    //TODO refactor
    firstTurnCoords.forEach((p) => {
        let curr = calculateNextPositions(p)
        secondTurnCoords.push(curr[0])
        curr.reduce((obj, item) => {
            secondTurnCoords.push(item)
        })
    })

    secondTurnCoords = removeInvalidValues(secondTurnCoords)

    return getSecondTurnPositions(secondTurnCoords)
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

    return possibleMoves.map((move) => {
        let next = {}
        next.x = initialCoord.x + move.x
        next.y = initialCoord.y + move.y
        next.id = convertCoordToPosition(next)
        return next
    })
}

export function removeInvalidValues (coords) {
    return coords.filter((c) => {
        return c.x > 0 && c.x <= 8 && c.y > 0 && c.y <= 8 
    })
}

export function getSecondTurnPositions (coords) {
    const uniquePositions = [...(new Set(coords.map(({ id }) => id)))];
    return uniquePositions
}

export function convertCoordToPosition (coord) {
    const string = 'ABCDEFGH'
    let pos = `${string[coord.x-1]}${coord.y}`
    return pos
}
