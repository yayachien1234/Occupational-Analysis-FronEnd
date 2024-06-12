import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesComponent } from './graduates.component';

describe('GraduatesComponent', () => {
  let component: GraduatesComponent;
  let fixture: ComponentFixture<GraduatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraduatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
