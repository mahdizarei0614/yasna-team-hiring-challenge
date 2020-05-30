import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCountersComponent } from './multiple-counters.component';

describe('MultipleCountersComponent', () => {
  let component: MultipleCountersComponent;
  let fixture: ComponentFixture<MultipleCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
