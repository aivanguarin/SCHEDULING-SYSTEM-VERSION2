import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSemComponent } from './setup-sem.component';

describe('SetupSemComponent', () => {
  let component: SetupSemComponent;
  let fixture: ComponentFixture<SetupSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
