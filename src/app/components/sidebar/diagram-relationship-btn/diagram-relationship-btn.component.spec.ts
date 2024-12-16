import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramRelationshipBtnComponent } from './diagram-relationship-btn.component';

describe('DiagramRelationshipBtnComponent', () => {
  let component: DiagramRelationshipBtnComponent;
  let fixture: ComponentFixture<DiagramRelationshipBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramRelationshipBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagramRelationshipBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
