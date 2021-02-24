import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCreditCardsComponent } from './saved-credit-cards.component';

describe('SavedCreditCardsComponent', () => {
  let component: SavedCreditCardsComponent;
  let fixture: ComponentFixture<SavedCreditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedCreditCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
