import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRelationshipBtnComponent } from './create-relationship-btn.component';

describe('CreateRelationshipBtnComponent', () => {
  let component: CreateRelationshipBtnComponent;
  let fixture: ComponentFixture<CreateRelationshipBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRelationshipBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRelationshipBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
