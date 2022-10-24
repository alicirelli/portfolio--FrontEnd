import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleskillComponent } from './singleskill.component';

describe('SingleskillComponent', () => {
  let component: SingleskillComponent;
  let fixture: ComponentFixture<SingleskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
