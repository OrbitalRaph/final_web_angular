import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModifyFormComponent } from './character-modify-form.component';

describe('CharacterModifyFormComponent', () => {
  let component: CharacterModifyFormComponent;
  let fixture: ComponentFixture<CharacterModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterModifyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
