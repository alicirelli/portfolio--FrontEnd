import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehistoryComponent } from './singlehistory.component';

describe('SinglehistoryComponent', () => {
  let component: SinglehistoryComponent;
  let fixture: ComponentFixture<SinglehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglehistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
