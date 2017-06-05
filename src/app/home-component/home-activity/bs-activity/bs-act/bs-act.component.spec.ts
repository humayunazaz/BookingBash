/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsActComponent } from './bs-act.component';

describe('BsActComponent', () => {
  let component: BsActComponent;
  let fixture: ComponentFixture<BsActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
