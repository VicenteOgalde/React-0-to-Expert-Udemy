import { returnArray } from "../../src/base-testing/07-deses-arr"

describe('test 07-deses-arr', ()=>{

    test('should return string and number',()=>{

    const [letter,num]= returnArray();

    expect(typeof letter).toBe("string");
    expect(typeof num).toBe('number');
    })
})