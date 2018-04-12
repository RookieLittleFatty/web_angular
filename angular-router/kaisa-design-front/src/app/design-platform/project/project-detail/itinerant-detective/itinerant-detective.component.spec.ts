import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerantDetectiveComponent } from './itinerant-detective.component';

describe('ItinerantDetectiveComponent', () => {
  let component: ItinerantDetectiveComponent;
  let fixture: ComponentFixture<ItinerantDetectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerantDetectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerantDetectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
