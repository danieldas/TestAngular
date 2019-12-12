import {FormularioRegister} from './formulario';
import {FormBuilder} from '@angular/forms';

describe ('Pruebas de formulario', ()=>{
let componente: FormularioRegister;

beforeEach(()=>{
componente= new FormularioRegister(new FormBuilder());
});
it('Debe crear un formulario con 2 campos, email y pass', ()=>{
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
});
    it('El email debe ser obligatorio', ()=>{
        const control= componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
    it('El email debe ser valido', ()=>{
        const control= componente.form.get('email');
        control.setValue('daniel@gmail.com');
        expect(control.valid).toBeTruthy();
    })	
})