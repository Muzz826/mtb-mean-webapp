import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTutorialsComponent } from './tech-tutorials.component';

describe('TechTutorialsComponent', () => {
  let component: TechTutorialsComponent;
  let fixture: ComponentFixture<TechTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
