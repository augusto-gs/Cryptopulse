import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoinDetailComponent } from './coin-detail.component';
import { CoinService } from 'src/app/core/coin.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { coinMock } from 'src/app/mocks/coinMock';
import { ActivatedRoute } from '@angular/router';

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

  it('Then it should show an image with an alternative text "Logo of Bitcoin"', fakeAsync(() => {
    const imageAlternativeText = 'Logo of btc';

    spyOn(coinService, 'loadCoin').and.returnValue();

    tick();

    coinService.coin$.next(coinMock);

    fixture.detectChanges();

    component.ngOnInit();
    const coinLogo = element.query(By.css('img'));
    expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
  }));
});
