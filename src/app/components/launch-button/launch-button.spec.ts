import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchButton } from './launch-button';

describe('LaunchButton', () => {
  let component: LaunchButton;
  let fixture: ComponentFixture<LaunchButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
