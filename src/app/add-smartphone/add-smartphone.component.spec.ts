import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmartphoneComponent } from './add-smartphone.component';

describe('AddSmartphoneComponent', () => {
  let component: AddSmartphoneComponent;
  let fixture: ComponentFixture<AddSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSmartphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
