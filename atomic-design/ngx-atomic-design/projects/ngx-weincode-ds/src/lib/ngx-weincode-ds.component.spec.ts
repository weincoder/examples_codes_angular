import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWeincodeDsComponent } from './ngx-weincode-ds.component';

describe('NgxWeincodeDsComponent', () => {
  let component: NgxWeincodeDsComponent;
  let fixture: ComponentFixture<NgxWeincodeDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWeincodeDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWeincodeDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
