import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWithMultipleWinnerComponent } from './years-with-multiple-winner.component';

describe('YearsWithMultipleWinnerComponent', () => {
  let component: YearsWithMultipleWinnerComponent;
  let fixture: ComponentFixture<YearsWithMultipleWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearsWithMultipleWinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsWithMultipleWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
