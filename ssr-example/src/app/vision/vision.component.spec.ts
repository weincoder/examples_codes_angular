import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionComponent } from './vision.component';

describe('VisionComponent', () => {
  let component: VisionComponent;
  let fixture: ComponentFixture<VisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
