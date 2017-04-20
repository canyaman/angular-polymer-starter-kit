/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View404Component } from './view404.component';

describe('View404Component', () => {
  let component: View404Component;
  let fixture: ComponentFixture<View404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});