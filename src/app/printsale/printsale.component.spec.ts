import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintsaleComponent } from './printsale.component';

describe('PrintsaleComponent', () => {
  let component: PrintsaleComponent;
  let fixture: ComponentFixture<PrintsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
