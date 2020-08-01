import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechReviewsComponent } from './tech-reviews.component';

describe('TechReviewsComponent', () => {
  let component: TechReviewsComponent;
  let fixture: ComponentFixture<TechReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
