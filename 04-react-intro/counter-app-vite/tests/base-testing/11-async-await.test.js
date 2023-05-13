import { getImg } from "../../src/base-testing/11-async-await";

describe('test 11-async-await', ()=>{

    test('getImg should return a url of the image',async()=>{
        const url = await getImg();
        console.log(url)
        expect(typeof url).toBe('string')
    })
})