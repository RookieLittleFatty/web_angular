import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMeetingDetailComponent } from './app-meeting-detail.component';

describe('AppMeetingDetailComponent', () => {
  let component: AppMeetingDetailComponent;
  let fixture: ComponentFixture<AppMeetingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMeetingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMeetingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
