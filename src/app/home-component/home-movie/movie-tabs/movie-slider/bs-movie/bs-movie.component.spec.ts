/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BsMovieComponent } from './bs-movie.component';

describe('BsMovieComponent', () => {
  let component: BsMovieComponent;
  let fixture: ComponentFixture<BsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
