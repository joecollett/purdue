import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedAlumniComponent } from './highlighted-alumni.component';

describe('HighlightedAlumniComponent', () => {
  let component: HighlightedAlumniComponent;
  let fixture: ComponentFixture<HighlightedAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
