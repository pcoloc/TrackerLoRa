import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoDetailComponent } from './monitoreo-detail.component';

describe('MonitoreoDetailComponent', () => {
  let component: MonitoreoDetailComponent;
  let fixture: ComponentFixture<MonitoreoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
