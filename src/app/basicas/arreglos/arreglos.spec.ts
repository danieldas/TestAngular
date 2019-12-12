import { obtenerPersonas } from './arreglos';

describe ('Pruebas de arreglos', () =>{

    it('Debe retornar al menos 3 Personas', ()=>{
        const res= obtenerPersonas();
        expect(res.length).toBeGreaterThanOrEqual(3);
    })

    it('debe existir la persona claudio', ()=>{
        const res=obtenerPersonas();
        expect(res).toContain('claudio');
    })
})