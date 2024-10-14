import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDosComponent } from './noticia-dos.component';

describe('NoticiaDosComponent', () => {
  let component: NoticiaDosComponent;
  let fixture: ComponentFixture<NoticiaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaDosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
