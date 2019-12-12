import {Jugador} from './clase';

describe ('Prueba de clase', ()=>{
    //const jugador = new Jugador();
    let jugador:Jugador;
    beforeAll(()=>{
        console.warn('-----------------BeforeAll');
    });
    beforeEach(()=>{
        console.warn('*****************BeforeEach');
        jugador=new Jugador();
    });
    afterAll(()=>{
        console.warn('////////////////////AfterAll');
    });
    afterEach(()=>{
        console.warn('+++++++++++++++++++AfterEach');
        
    });

    it('Debe retornar 80 de hp, si recibe 20 de danio', ()=>{
        const resp= jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });

    it('Debe retornar 50 de hp, si recibe 50 de danio', ()=>{
        const resp= jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
    it('Debe retornar 0 de hp, si recibe 300 de danio', ()=>{
        const resp= jugador.recibeDanio(300);
        expect(resp).toBe(0);
    });

})