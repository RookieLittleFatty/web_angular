import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPlatformComponent } from './design-platform.component';

describe('DesignPlatformComponent', () => {
  let component: DesignPlatformComponent;
  let fixture: ComponentFixture<DesignPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
