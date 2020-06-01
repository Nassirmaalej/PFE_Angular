import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudutilisateurComponent } from './crudutilisateur.component';

describe('CrudutilisateurComponent', () => {
  let component: CrudutilisateurComponent;
  let fixture: ComponentFixture<CrudutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
