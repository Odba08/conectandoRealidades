import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTresComponent } from './noticia-tres.component';

describe('NoticiaTresComponent', () => {
  let component: NoticiaTresComponent;
  let fixture: ComponentFixture<NoticiaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
