import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaUnoComponent } from './noticia-uno.component';

describe('NoticiaUnoComponent', () => {
  let component: NoticiaUnoComponent;
  let fixture: ComponentFixture<NoticiaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiaUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
