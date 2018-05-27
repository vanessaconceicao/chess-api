import { equal } from 'assert'
import { convertPosition } from '../calculatePositions'

describe('Test convertPosition', () => {
    it('should return x: 1 when passing A', () => {
        let result = convertPosition('A')
        equal(result.x, 1)
    })
    
    it('should return x: 2 when passing B', () => {
        let result = convertPosition('B')
        equal(result.x, 2)
    })
    
    it('should return x: 3 when passing C', () => {
        let result = convertPosition('C')
        equal(result.x, 3)
    })
    
    it('should return x: 4 when passing D', () => {
        let result = convertPosition('D')
        equal(result.x, 4)
    })
    
    it('should return x: 5 when passing E', () => {
        let result = convertPosition('E')
        equal(result.x, 5)
    })
    
    it('should return x: 6 when passing F', () => {
        let result = convertPosition('F')
        equal(result.x, 6)
    })
    
    it('should return x: 7 when passing G', () => {
        let result = convertPosition('G')
        equal(result.x, 7)
    })
    
    it('should return x: 8 when passing H', () => {
        let result = convertPosition('H')
        equal(result.x, 8)
    })
})

