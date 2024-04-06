import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoinDetailComponent } from './coin-detail.component';
import { CoinService } from 'src/app/core/coin.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { coinMock } from 'src/app/mocks/coinMock';
import { ActivatedRoute } from '@angular/router';
import { coins } from 'src/app/data/coins';

describe('CoinDetailComponent', () => {
  let component: CoinDetailComponent;
  let fixture: ComponentFixture<CoinDetailComponent>;
  let element: DebugElement;
  let coinService: CoinService;

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
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(CoinDetailComponent);

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

    coinService.coins$.next(coins);

    fixture.detectChanges();

    const coinLogo = element.query(By.css('img'));

    expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
  }));

  it('Then it should show no image', fakeAsync(() => {
    const imageAlternativeText = 'Logo of ';

    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      declarations: [CoinDetailComponent, ButtonComponent],
      providers: [CoinService],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(CoinDetailComponent);

    coinService = TestBed.inject(CoinService);

    element = fixture.debugElement;

    coinService.coins$.next(coins);

    fixture.detectChanges();

    const coinLogo = element.query(By.css('img'));

    expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
  }));
});
