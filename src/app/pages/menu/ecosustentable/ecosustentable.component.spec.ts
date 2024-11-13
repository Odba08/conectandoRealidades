import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosustentableComponent } from './ecosustentable.component';

describe('EcosustentableComponent', () => {
  let component: EcosustentableComponent;
  let fixture: ComponentFixture<EcosustentableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcosustentableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosustentableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
