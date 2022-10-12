import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCardComponent } from './wc-card.component';

describe('WcCardComponent', () => {
  let component: WcCardComponent;
  let fixture: ComponentFixture<WcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
