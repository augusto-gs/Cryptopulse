import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Given a Header component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  describe('When it is rendered on screen', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
      });

      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });

    it('Should appear on screen', () => {
      expect(component).toBeTruthy();
    });

    it("Should show an img with an alternative text 'Cryptopulse logo'", () => {
      const logoImage = el.query(By.css('img'));

      expect(logoImage.nativeElement.alt).toBe('Cryptopulse logo');
    });
  });
});
