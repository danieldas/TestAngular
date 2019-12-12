import {incrementar} from './numeros';

describe('pruebas de numeros', ()=>{

    it('Debe retornar 100 si el numero es mayor que 100', ()=>{
        const res= incrementar(300);
        expect(res).toBe(100);
    })

    it('Debe retornar el numero +1', ()=>{
        const res= incrementar(3);
        expect(res).toBe(4);
    })
})