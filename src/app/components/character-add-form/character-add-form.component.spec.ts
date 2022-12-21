import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAddFormComponent } from './character-add-form.component';

describe('CharacterAddFormComponent', () => {
  let component: CharacterAddFormComponent;
  let fixture: ComponentFixture<CharacterAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
