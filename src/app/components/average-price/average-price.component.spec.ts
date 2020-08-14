import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePriceComponent } from './average-price.component';

describe('AveragePriceComponent', () => {
  let component: AveragePriceComponent;
  let fixture: ComponentFixture<AveragePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
