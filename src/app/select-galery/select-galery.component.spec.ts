import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGaleryComponent } from './select-galery.component';

describe('SelectGaleryComponent', () => {
  let component: SelectGaleryComponent;
  let fixture: ComponentFixture<SelectGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
