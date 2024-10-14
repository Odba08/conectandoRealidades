import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCuatroComponent } from './noticia-cuatro.component';

describe('NoticiaCuatroComponent', () => {
  let component: NoticiaCuatroComponent;
  let fixture: ComponentFixture<NoticiaCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaCuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
