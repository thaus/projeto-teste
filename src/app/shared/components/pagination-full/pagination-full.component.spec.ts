import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFullComponent } from './pagination-full.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('PaginationFullComponent', () => {
  let component: PaginationFullComponent;
  let fixture: ComponentFixture<PaginationFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationFullComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the current page correctly', () => {
    const page = 3;
    const spy = spyOn(component.currentPage, 'set');

    component.setCurrentPage(page);

    expect(spy).toHaveBeenCalledWith(page);
  });

  it('should call generatePagesByTotalPages when totalPages changes', () => {
    const spy = spyOn(component, 'generatePagesByTotalPages');
    const changes: SimpleChanges = {
      totalPages: new SimpleChange(null, 5, true),
    };

    component.ngOnChanges(changes);

    expect(spy).toHaveBeenCalled();
  });

  it('should not call generatePagesByTotalPages when totalPages does not change', () => {
    const spy = spyOn(component, 'generatePagesByTotalPages');
    const changes: SimpleChanges = {
      someOtherProperty: new SimpleChange(null, 'value', true),
    };

    component.ngOnChanges(changes);

    expect(spy).not.toHaveBeenCalled();
  });
});
