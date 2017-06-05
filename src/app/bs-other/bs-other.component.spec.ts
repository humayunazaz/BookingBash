/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsOtherComponent } from './bs-other.component';

describe('BsOtherComponent', () => {
  let component: BsOtherComponent;
  let fixture: ComponentFixture<BsOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
