import {mensaje} from './stringd';

describe('pruebas de string', ()=>{

    it('Debe retornar un string', ()=>{
        const res= mensaje ('Hola');
        expect(typeof res).toBe('string');
    })

    it('Debe retornar el saludo con el nombre', ()=>{
        const res= mensaje('Daniel'.toLowerCase());
        expect(res).toBe('Saludos daniel');
    })
})