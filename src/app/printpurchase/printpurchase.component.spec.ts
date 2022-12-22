import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintpurchaseComponent } from './printpurchase.component';

describe('PrintpurchaseComponent', () => {
  let component: PrintpurchaseComponent;
  let fixture: ComponentFixture<PrintpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
