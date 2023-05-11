import { getHeroById, getHerosByOwner } from "../../src/base-testing/08-imp-exp";

describe('test 08-imp-exp', ()=>{

    test('getHeroById should return a hero',()=>{

    const id=2;
    const hero= getHeroById(id);

    expect(hero).toStrictEqual({ id: 2,
        name: 'Spiderman',
        owner: 'Marvel'});

    
    });

    test('getHeroById should return a undefined',()=>{

        const id=100;
        const hero= getHeroById(id);
    
        expect(hero).toStrictEqual(undefined);
    
        
        });

    test('getHeroByOwner should return [] of DC heros length 3',()=>{

            const owner='DC';
            const heroArray= getHerosByOwner(owner);
            expect(heroArray.length).toBe(3);
            expect(heroArray).toStrictEqual([{
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]);
        
            
            });

})