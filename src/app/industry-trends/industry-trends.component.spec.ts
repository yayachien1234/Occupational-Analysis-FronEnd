import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTrendsComponent } from './industry-trends.component';

describe('IndustryTrendsComponent', () => {
  let component: IndustryTrendsComponent;
  let fixture: ComponentFixture<IndustryTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustryTrendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
