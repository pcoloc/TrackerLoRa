import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesComponent } from './relaciones.component';

describe('RelacionesComponent', () => {
  let component: RelacionesComponent;
  let fixture: ComponentFixture<RelacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
