import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponent } from './coin-list.component';
import { CoinComponent } from '../coin/coin.component';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinListComponent, CoinComponent, CapitalizePipe],
    });
    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
