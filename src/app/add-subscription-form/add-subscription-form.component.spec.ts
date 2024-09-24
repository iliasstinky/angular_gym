import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscriptionFormComponent } from './add-subscription-form.component';

describe('AddSubscriptionFormComponent', () => {
  let component: AddSubscriptionFormComponent;
  let fixture: ComponentFixture<AddSubscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSubscriptionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
