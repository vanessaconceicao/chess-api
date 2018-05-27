import { equal } from 'assert'
import { expect } from 'chai'
import { convertPositionToCoords, calculateNextPositions, firstTurnPositions } from '../calculatePositions'


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

describe('Test calculateNextPositions', () => {
    it('should return all possible moves for an intial coordinate', () => {
        const initialCoord = {x: Math.round(Math.random()*7)+1, y: Math.round(Math.random()*7)+1 }
        calculateNextPositions(initialCoord)
        let expected = [
            { x: initialCoord.x -2, y: initialCoord.y -1 },
            { x: initialCoord.x -2, y: initialCoord.y +1 },
            { x: initialCoord.x +2, y: initialCoord.y -1 },    
            { x: initialCoord.x +2, y: initialCoord.y +1 },    
            { x: initialCoord.x -1, y: initialCoord.y -2 },    
            { x: initialCoord.x -1, y: initialCoord.y +2 },    
            { x: initialCoord.x +1, y: initialCoord.y -2 },    
            { x: initialCoord.x +1, y: initialCoord.y +2 }
        ]
        expect(firstTurnPositions).to.eql(expected)
    })
})

