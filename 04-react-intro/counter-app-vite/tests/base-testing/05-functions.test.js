import { getActiveUser, getUser } from "../../src/base-testing/05-functions"

describe('test functions 05', ()=>{

    test('getUser should return {}',()=>{

       const testUser= {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user= getUser();

    expect(testUser).toStrictEqual(user);

    const name = 'jon'
    
    const userWithName=getActiveUser(name);

    expect(name).toEqual(userWithName.username);    

    })
})