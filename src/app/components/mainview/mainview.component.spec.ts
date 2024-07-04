import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewComponent } from './mainview.component';

describe('MainviewComponent', () => {
  let component: MainviewComponent;
  let fixture: ComponentFixture<MainviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
