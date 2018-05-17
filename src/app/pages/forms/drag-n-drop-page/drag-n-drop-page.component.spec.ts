import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropPageComponent } from './drag-n-drop-page.component';

describe('DragNDropPageComponent', () => {
  let component: DragNDropPageComponent;
  let fixture: ComponentFixture<DragNDropPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
