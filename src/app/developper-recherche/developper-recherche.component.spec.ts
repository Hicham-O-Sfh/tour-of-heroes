import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopperRechercheComponent } from './developper-recherche.component';

describe('DevelopperRechercheComponent', () => {
  let component: DevelopperRechercheComponent;
  let fixture: ComponentFixture<DevelopperRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopperRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopperRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
