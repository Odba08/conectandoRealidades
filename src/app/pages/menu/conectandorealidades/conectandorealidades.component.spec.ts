import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectandorealidadesComponent } from './conectandorealidades.component';

describe('ConectandorealidadesComponent', () => {
  let component: ConectandorealidadesComponent;
  let fixture: ComponentFixture<ConectandorealidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConectandorealidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConectandorealidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
