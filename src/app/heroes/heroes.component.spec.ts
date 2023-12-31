import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosComponent } from './heroes.component';

describe('HerosComponent', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerosComponent],
    });
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
