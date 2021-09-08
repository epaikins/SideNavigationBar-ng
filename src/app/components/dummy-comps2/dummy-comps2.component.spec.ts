import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComps2Component } from './dummy-comps2.component';

describe('DummyComps2Component', () => {
  let component: DummyComps2Component;
  let fixture: ComponentFixture<DummyComps2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyComps2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
