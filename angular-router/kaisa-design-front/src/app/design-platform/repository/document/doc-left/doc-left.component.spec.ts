import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLeftComponent } from './doc-left.component';

describe('DocLeftComponent', () => {
  let component: DocLeftComponent;
  let fixture: ComponentFixture<DocLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
