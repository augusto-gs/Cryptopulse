import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinComponent } from './coin.component';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { coinMock } from 'src/app/mocks/coinMock';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Given a CoinComponent', () => {
  let component: CoinComponent;
  let fixture: ComponentFixture<CoinComponent>;
  let element: DebugElement;

  describe('When it is rendered on screen', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [CoinComponent, CapitalizePipe],
        imports: [HttpClientTestingModule, RouterTestingModule],
      });

      fixture = TestBed.createComponent(CoinComponent);

      component = fixture.componentInstance;
      component.coin = coinMock;
      element = fixture.debugElement;

      fixture.detectChanges();
    });

    it('Then it should appear on screen', () => {
      expect(component).toBeTruthy();
    });

    it("Then it should show an image with 'Image of Bitcoin' as alternative text", () => {
      const imageAlternativeText = 'Image of btc';

      const coinLogo = element.query(By.css('img'));
      expect(coinLogo.nativeElement.alt).toBe(imageAlternativeText);
    });
  });
});
