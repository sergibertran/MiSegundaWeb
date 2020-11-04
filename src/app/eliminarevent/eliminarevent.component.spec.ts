import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminareventComponent } from './eliminarevent.component';

describe('EliminareventComponent', () => {
  let component: EliminareventComponent;
  let fixture: ComponentFixture<EliminareventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminareventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminareventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
