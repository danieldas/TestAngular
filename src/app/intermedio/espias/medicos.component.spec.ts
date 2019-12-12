import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {from, EMPTY, throwError} from 'rxjs';

describe ('Medicos Component testSuit', ()=>{
  let component: MedicosComponent;
  const servicio= new MedicosService(null);

  beforeEach(()=>{
    component= new MedicosComponent(servicio);
  });

  it('Innit: Debe cargar los medicos', ()=>{
    const medicosFake =['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(()=>{
      return from([medicosFake])
    })
    component.ngOnInit();
    expect(component.medicos.length).toBeGreaterThan(0);
  })

  it('Debe llamar al servidor para agregar un medico', ()=>{
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico=>{
      return EMPTY;
    })
    component.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo medico al arreglo del componente', ()=>{
    const medico =  {id: 1, nombre: 'Daniel'};
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    component.agregarMedico();
    expect(component.medicos.length).toBeGreaterThanOrEqual(1);
  });

  it('Si falla la llamada, el error debe ser igual al error del servicio', ()=>{
    const miError = 'No se pudo agregar al medico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    component.agregarMedico();
    expect(component.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar un medico', ()=>{
  spyOn(window, 'confirm').and.returnValue(true);
  const espia = spyOn(servicio, 'borrarMedico').and.callFake(medico=>{
    return EMPTY;
  })
  component.borrarMedico("1");
  expect(espia).toHaveBeenCalledWith("1");
});
it("No debe llamar al servidor para borrar un medico cuando confirmar sea negativo", ()=>{
  spyOn(window, 'confirm').and.returnValue(false);
  const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
  component.borrarMedico("1")
  expect(espia).not.toHaveBeenCalled()
})

})