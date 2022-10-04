import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmfComponent } from './showmf.component';

describe('ShowmfComponent', () => {
  let component: ShowmfComponent;
  let fixture: ComponentFixture<ShowmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
