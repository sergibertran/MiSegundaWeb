import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaeventComponent } from './altaevent.component';

describe('AltaeventComponent', () => {
  let component: AltaeventComponent;
  let fixture: ComponentFixture<AltaeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
