import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CoinListComponent } from './coin-list.component';
import { CoinComponent } from '../coin/coin.component';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { CoinService } from 'src/app/core/coin.service';
import { mockCoins } from 'src/app/mocks/coinsMock';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;
  let testController: HttpTestingController;
  const apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService],
      declarations: [CoinListComponent, CoinComponent, CapitalizePipe],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CoinListComponent);
    testController = TestBed.inject(HttpTestingController);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should subscribe to coinService and coin property should change', () => {
    const mockReq = testController.expectOne(apiUrl);

    mockReq.flush(Object.values(mockCoins));

    expect(component.coins).toBeTruthy();
    expect(component.coins).toEqual(mockCoins);
  });
});
