import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComps1Component } from './dummy-comps1.component';

describe('DummyComps1Component', () => {
  let component: DummyComps1Component;
  let fixture: ComponentFixture<DummyComps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyComps1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
