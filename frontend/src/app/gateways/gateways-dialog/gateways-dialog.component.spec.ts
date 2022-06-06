import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaysDialogComponent } from './gateways-dialog.component';

describe('GatewaysDialogComponent', () => {
  let component: GatewaysDialogComponent;
  let fixture: ComponentFixture<GatewaysDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaysDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
