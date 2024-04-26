import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoinDetailComponent } from './coin-detail.component';
import { CoinService } from 'src/app/core/coin.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { coinMock } from 'src/app/mocks/coinMock';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockCoins } from 'src/app/mocks/coinsMock';

describe('CoinDetailComponent', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;
  let element: DebugElement;
  let coinService: CoinService;
  let testController: HttpTestingController;
  const apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinDetailComponent, ButtonComponent],
      providers: [
        CoinService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { coinId: 'bitcoin' },
            },
          },
        },
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(CoinDetailComponent);
    testController = TestBed.inject(HttpTestingController);

    coinService = TestBed.inject(CoinService);

    component = fixture.componentInstance;
    component.coin = coinMock;
    element = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Then it should show an image with an alternative text "Logo of Btc"', fakeAsync(() => {
    const imageAlternativeText = 'Logo of Bitcoin';

    coinService.coins.next(mockCoins);

    const mockReq = testController.expectOne(apiUrl);

    mockReq.flush(Object.values(mockCoins));

    fixture.detectChanges();

    const coinLogo = element.query(By.css('.coin__image'));

    expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
  }));

  it('Then it should show no image', fakeAsync(() => {
    const imageAlternativeText = 'Logo of ';

    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      declarations: [CoinDetailComponent, ButtonComponent],
      providers: [CoinService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });

    fixture = TestBed.createComponent(CoinDetailComponent);

    coinService = TestBed.inject(CoinService);

    element = fixture.debugElement;

    coinService.coins.next(mockCoins);

    const mockReq = testController.expectOne(apiUrl);

    mockReq.flush(Object.values(mockCoins));

    fixture.detectChanges();

    const coinLogo = element.query(By.css('.coin__image'));

    expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
  }));
});
