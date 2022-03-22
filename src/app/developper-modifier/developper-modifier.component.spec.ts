import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopperModifierComponent } from './developper-modifier.component';

describe('DevelopperModifierComponent', () => {
  let component: DevelopperModifierComponent;
  let fixture: ComponentFixture<DevelopperModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopperModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopperModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
