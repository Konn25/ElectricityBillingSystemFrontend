import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConsumptionComponent } from './client-consumption.component';

describe('ClientConsumptionComponent', () => {
  let component: ClientConsumptionComponent;
  let fixture: ComponentFixture<ClientConsumptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientConsumptionComponent]
    });
    fixture = TestBed.createComponent(ClientConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
