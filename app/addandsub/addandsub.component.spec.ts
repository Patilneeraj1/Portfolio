import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddandsubComponent } from './addandsub.component';

describe('AddandsubComponent', () => {
  let component: AddandsubComponent;
  let fixture: ComponentFixture<AddandsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddandsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddandsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
