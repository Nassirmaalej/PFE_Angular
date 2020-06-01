import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditutilisateurComponent } from './editutilisateur.component';

describe('EditutilisateurComponent', () => {
  let component: EditutilisateurComponent;
  let fixture: ComponentFixture<EditutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
