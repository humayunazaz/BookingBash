/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsFootComponent } from './bs-foot.component';

describe('BsFootComponent', () => {
  let component: BsFootComponent;
  let fixture: ComponentFixture<BsFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
