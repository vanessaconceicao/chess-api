import { equal, deepEqual, ok } from 'assert'
import {
  convertPositionToCoords,
  calculateNextCoords,
  firstTurnPositions,
  convertCoordToPosition,
  removeInvalidCoords,
  removeDuplicatedPositions,
  isValidPosition,
  getNextTurnCoords
} from '../calculatePositions'

describe('Test convertPositionToCoords', () => {
  it('should return x: 1 when passing A', () => {
    let result = convertPositionToCoords('A')
    equal(result.x, 1)
  })

  it('should return x: 2 when passing B', () => {
    let result = convertPositionToCoords('B')
    equal(result.x, 2)
  })

  it('should return x: 3 when passing C', () => {
    let result = convertPositionToCoords('C')
    equal(result.x, 3)
  })

  it('should return x: 4 when passing D', () => {
    let result = convertPositionToCoords('D')
    equal(result.x, 4)
  })

  it('should return x: 5 when passing E', () => {
    let result = convertPositionToCoords('E')
    equal(result.x, 5)
  })

  it('should return x: 6 when passing F', () => {
    let result = convertPositionToCoords('F')
    equal(result.x, 6)
  })

  it('should return x: 7 when passing G', () => {
    let result = convertPositionToCoords('G')
    equal(result.x, 7)
  })

  it('should return x: 8 when passing H', () => {
    let result = convertPositionToCoords('H')
    equal(result.x, 8)
  })
})

describe('Test getNextTurnCoords', () => {
  it('should return the next valid coords for a set of coordinates', () => {
    const currentTurnCoords = [
      { x: 4, y: 3, id: 'D3' },
      { x: 2, y: 5, id: 'B5' }
    ]

    const expected = [
      { x: 2, y: 2, id: 'B2' },
      { x: 2, y: 4, id: 'B4' },
      { x: 6, y: 2, id: 'F2' },
      { x: 6, y: 4, id: 'F4' },
      { x: 3, y: 1, id: 'C1' },
      { x: 3, y: 5, id: 'C5' },
      { x: 5, y: 1, id: 'E1' },
      { x: 5, y: 5, id: 'E5' },
      { x: 4, y: 4, id: 'D4' },
      { x: 4, y: 6, id: 'D6' },
      { x: 1, y: 3, id: 'A3' },
      { x: 1, y: 7, id: 'A7' },
      { x: 3, y: 3, id: 'C3' },
      { x: 3, y: 7, id: 'C7' }
    ]

    const result = getNextTurnCoords(currentTurnCoords)

    deepEqual(result, expected)
  })
})

describe('Test calculateNexCoords', () => {
  it('should return all possible coord for an intial coordinate', () => {
    const initialCoord = { x: 3, y: 4}
    let result = calculateNextCoords(initialCoord)
    let expected = [
      {
        x: initialCoord.x - 2,
        y: initialCoord.y - 1,
        id: convertCoordToPosition({ x: initialCoord.x - 2, y: initialCoord.y - 1 })
      },
      {
        x: initialCoord.x - 2,
        y: initialCoord.y + 1,
        id: convertCoordToPosition({ x: initialCoord.x - 2, y: initialCoord.y + 1 })
      },
      {
        x: initialCoord.x + 2,
        y: initialCoord.y - 1,
        id: convertCoordToPosition({ x: initialCoord.x + 2, y: initialCoord.y - 1 })
      },
      {
        x: initialCoord.x + 2,
        y: initialCoord.y + 1,
        id: convertCoordToPosition({ x: initialCoord.x + 2, y: initialCoord.y + 1 })
      },
      {
        x: initialCoord.x - 1,
        y: initialCoord.y - 2,
        id: convertCoordToPosition({ x: initialCoord.x - 1, y: initialCoord.y - 2 })
      },
      {
        x: initialCoord.x - 1,
        y: initialCoord.y + 2,
        id: convertCoordToPosition({ x: initialCoord.x - 1, y: initialCoord.y + 2 })
      },
      {
        x: initialCoord.x + 1,
        y: initialCoord.y - 2,
        id: convertCoordToPosition({ x: initialCoord.x + 1, y: initialCoord.y - 2 })
      },
      {
        x: initialCoord.x + 1,
        y: initialCoord.y + 2,
        id: convertCoordToPosition({ x: initialCoord.x + 1, y: initialCoord.y + 2 })
      }
    ]
    deepEqual(result, expected)
  })
})

describe('Test removeInvalidCoords', () => {
  it('Should remove the out of board coordinates', () => {
    const positions = [
      { x: 0, y: 4 },
      { x: 5, y: -1 },
      { x: 3, y: 2 },
      { x: 9, y: 1 }
    ]
    const result = removeInvalidCoords(positions)
    const expected = [{ x: 3, y: 2 }]

    deepEqual(result, expected)
  })
})

describe('Test removeDuplicatedPositions', () => {
  it('should return all unique positions in algebraic notation', () => {
    const positions = [
      { x: 2, y: 3, id: 'B3' },
      { x: 1, y: 5, id: 'A5' },
      { x: 2, y: 3, id: 'B3' },
      { x: 3, y: 3, id: 'C3' },
      { x: 1, y: 5, id: 'A5' }
    ]
    const expected = ['B3', 'A5', 'C3']
    const result = removeDuplicatedPositions(positions)

    deepEqual(result, expected)
  })
})

describe('Test convertCoordToPosition', () => {
  it('should return A when passing x: 1', () => {
    const position = { x: 1, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'A')
  })

  it('should return B when passing x: 2', () => {
    const position = { x: 2, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'B')
  })

  it('should return C when passing x: 3', () => {
    const position = { x: 3, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'C')
  })

  it('should return D when passing x: 4', () => {
    const position = { x: 4, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'D')
  })

  it('should return E when passing x: 5', () => {
    const position = { x: 5, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'E')
  })

  it('should return F when passing x: 6', () => {
    const position = { x: 6, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'F')
  })

  it('should return G when passing x: 7', () => {
    const position = { x: 7, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'G')
  })

  it('should return H when passing x: 8', () => {
    const position = { x: 8, y: 1 }
    const result = convertCoordToPosition(position)
    equal(result[0], 'H')
  })
})

describe('Test isValidPosition', () => {
  it('should return false if initial position is not in Algebraic notation', () => {
    const initialPosition = '18'
    const result = isValidPosition(initialPosition)
    equal(result, false)
  })

  it('should return false if initial position length is greater than 2', () => {
    const initialPosition = 'A85'
    const result = isValidPosition(initialPosition)
    equal(result, false)
  })

  it('should return true if initial position is in Algebraic notation', () => {
    const initialPosition = 'A8'
    const result = isValidPosition(initialPosition)
    ok(result)
  })
})
