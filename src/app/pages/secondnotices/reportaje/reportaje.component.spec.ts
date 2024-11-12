import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportajeComponent } from './reportaje.component';

describe('ReportajeComponent', () => {
  let component: ReportajeComponent;
  let fixture: ComponentFixture<ReportajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
