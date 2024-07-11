import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassBtnComponent } from './create-class-btn.component';

describe('CreateClassBtnComponent', () => {
  let component: CreateClassBtnComponent;
  let fixture: ComponentFixture<CreateClassBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClassBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClassBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
