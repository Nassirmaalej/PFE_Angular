import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addutilisateur1Component } from './addutilisateur1.component';

describe('Addutilisateur1Component', () => {
  let component: Addutilisateur1Component;
  let fixture: ComponentFixture<Addutilisateur1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addutilisateur1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addutilisateur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
