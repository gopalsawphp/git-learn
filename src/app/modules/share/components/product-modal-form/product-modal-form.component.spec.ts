import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalFormComponent } from './product-modal-form.component';

describe('ProductModalFormComponent', () => {
  let component: ProductModalFormComponent;
  let fixture: ComponentFixture<ProductModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
