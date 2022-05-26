import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFooterComponent } from './editar-footer.component';

describe('EditarFooterComponent', () => {
  let component: EditarFooterComponent;
  let fixture: ComponentFixture<EditarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
