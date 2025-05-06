import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetaiComponent } from './recipe-detai.component';

describe('RecipeDetaiComponent', () => {
  let component: RecipeDetaiComponent;
  let fixture: ComponentFixture<RecipeDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeDetaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
