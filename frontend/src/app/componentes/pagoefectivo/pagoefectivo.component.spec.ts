import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoefectivoComponent } from './pagoefectivo.component';

describe('PagoefectivoComponent', () => {
  let component: PagoefectivoComponent;
  let fixture: ComponentFixture<PagoefectivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoefectivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoefectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
