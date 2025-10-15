import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodatoComponent } from './comodato.component';

describe('ComodatoComponent', () => {
  let component: ComodatoComponent;
  let fixture: ComponentFixture<ComodatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComodatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComodatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
