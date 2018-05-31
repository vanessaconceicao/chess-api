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

const letters = 'ABCDEFGH'

export const invalidInitialPositionError = new Error(
  'The initial position must be in Algebraic notation, A to H and 1 to 8'
)

export default function findPositionsAfterSecondTurn(initialPosition) {
  if (!isValidPosition(initialPosition)) throw invalidInitialPositionError

  let firstTurnCoords = []
  let secondTurnCoords = []
  let nextCoords = []

  const initialCoord = convertPositionToCoords(initialPosition)

  firstTurnCoords = getNextTurnCoords([initialCoord])

  secondTurnCoords = getNextTurnCoords(firstTurnCoords)

  nextCoords = getNextTurnCoords(secondTurnCoords)

  return removeDuplicatedPositions(nextCoords)
}

export function convertPositionToCoords(position) {
  position = { x: position[0].toUpperCase(), y: Number(position[1]) }

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

export function getNextTurnCoords(currentTurnCoords) {
  let nextTurnCoords = []
  currentTurnCoords.forEach(c => {
    let curr = calculateNextCoords(c)
    curr.forEach(item => {
      nextTurnCoords.push(item)
    })
  })
  return removeInvalidCoords(nextTurnCoords)
}

export function calculateNextCoords(initialCoord) {
  return possibleMoves.map(move => {
    let next = {}
    next.x = initialCoord.x + move.x
    next.y = initialCoord.y + move.y
    next.id = convertCoordToPosition(next)
    return next
  })
}

export function removeInvalidCoords(coords) {
  return coords.filter(c => {
    return c.x > 0 && c.x <= 8 && c.y > 0 && c.y <= 8
  })
}

export function removeDuplicatedPositions(coords) {
  return [...new Set(coords.map(({ id }) => id))]
}

export function convertCoordToPosition(coord) {
  let pos = `${letters[coord.x - 1]}${coord.y}`
  return pos
}

export function isValidPosition(initialPosition) {
  if (initialPosition) {
    const correctSize = initialPosition.length === 2

    const positionX = initialPosition[0].toUpperCase()
    const positionY = initialPosition[1]

    const correctX = letters.includes(positionX)
    const correctY = positionY > 0 && positionY <= 8

    return correctX && correctY && correctSize
  }
  return false
}
