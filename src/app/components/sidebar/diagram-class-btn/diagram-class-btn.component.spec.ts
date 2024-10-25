import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramClassBtnComponent } from './diagram-class-btn.component';

describe('DiagramClassBtnComponent', () => {
  let component: DiagramClassBtnComponent;
  let fixture: ComponentFixture<DiagramClassBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramClassBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagramClassBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
