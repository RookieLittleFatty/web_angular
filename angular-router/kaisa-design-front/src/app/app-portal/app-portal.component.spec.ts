import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortalComponent } from './app-portal.component';

describe('AppPortalComponent', () => {
  let component: AppPortalComponent;
  let fixture: ComponentFixture<AppPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
