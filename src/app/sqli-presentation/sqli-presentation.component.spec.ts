import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliPresentationComponent } from './sqli-presentation.component';

describe('SqliPresentationComponent', () => {
  let component: SqliPresentationComponent;
  let fixture: ComponentFixture<SqliPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqliPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqliPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
