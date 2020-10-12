// import { generateUniqueID } from 'utilities'
import {reducer} from './usePortfolio'


const testState = [
    {
        id: 'bitcoin',
        amount: 2,
        uniqueID: 1
    }, 
    {
        id: 'monero',
        amount: 2,
        uniqueID: 2
    }
]

test('Adds asset', () => {
    expect(reducer(testState, {type:'add_asset'})).toBe()
})
test('Removes asset', () => {
    expect(reducer(testState, {type:'remove_asset', uniqueID: testState[2].uniqueID})).toBe([testState[0]])
})
test('Removes all assets', () => {
    expect(reducer(testState, {type:'remove_all_assets'})).toBe([])
})
test('Replaces assets', () => {
    expect(reducer(testState, {type:'replace_assets', assets: []})).toBe([])
})