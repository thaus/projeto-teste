import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByYearComponent } from './search-by-year.component';

describe('SearchByYearComponent', () => {
  let component: SearchByYearComponent;
  let fixture: ComponentFixture<SearchByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct year when selectedYear is changed', () => {
    const year = 2024;
    const spy = spyOn(component.yearChanged, 'emit');

    component.selectedYear = year;
    component.initYearChanged();

    expect(spy).toHaveBeenCalledWith(year);
  });
});
