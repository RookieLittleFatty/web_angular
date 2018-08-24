import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperRefreshComponent } from './swiper-refresh.component';

describe('SwiperRefreshComponent', () => {
  let component: SwiperRefreshComponent;
  let fixture: ComponentFixture<SwiperRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
