import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareventComponent } from './modificarevent.component';

describe('ModificareventComponent', () => {
  let component: ModificareventComponent;
  let fixture: ComponentFixture<ModificareventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificareventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificareventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
