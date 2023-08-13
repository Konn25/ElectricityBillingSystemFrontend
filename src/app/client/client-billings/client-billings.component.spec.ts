import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBillingsComponent } from './client-billings.component';

describe('ClientBillingsComponent', () => {
  let component: ClientBillingsComponent;
  let fixture: ComponentFixture<ClientBillingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientBillingsComponent]
    });
    fixture = TestBed.createComponent(ClientBillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
