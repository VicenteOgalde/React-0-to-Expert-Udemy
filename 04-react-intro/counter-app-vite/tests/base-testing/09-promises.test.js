import { getHeroByIdAsync } from "../../src/base-testing/09-promises";


describe('test 09-promises', ()=>{

    test('getHeroByIdAsync should return a hero',(done)=>{

    const id=2;
    getHeroByIdAsync(id)
    .then(hero=>{
        expect(hero).toStrictEqual({ id: 2,
            name: 'Spiderman',
            owner: 'Marvel'});       
        });
        done();
    });

    test('getHeroByIdAsync should return a error if hero dont exist',(done)=>{

        const id=100;
        getHeroByIdAsync(id)
        .catch(error=>{
            console.log(error)
            done();
        });

    
})
})