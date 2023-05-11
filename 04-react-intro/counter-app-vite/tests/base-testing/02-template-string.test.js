import { getGreet } from './../../src/base-testing/02-template-string';


describe('test template string', ()=>{

    test('getGreet should return "hello vicente"',()=>{

        const name ="vicente";
        const message=getGreet(name);

        
        expect(message).toBe("hello "+name)

        

    })
})