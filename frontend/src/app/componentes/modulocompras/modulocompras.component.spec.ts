import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulocomprasComponent } from './modulocompras.component';

describe('ModulocomprasComponent', () => {
  let component: ModulocomprasComponent;
  let fixture: ComponentFixture<ModulocomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulocomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
