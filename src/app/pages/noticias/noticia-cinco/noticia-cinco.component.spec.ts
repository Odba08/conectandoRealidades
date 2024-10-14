import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCincoComponent } from './noticia-cinco.component';

describe('NoticiaCincoComponent', () => {
  let component: NoticiaCincoComponent;
  let fixture: ComponentFixture<NoticiaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaCincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
