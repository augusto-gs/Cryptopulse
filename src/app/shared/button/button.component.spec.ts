import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Given a button Component', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let element: DebugElement;

  describe('When it is rendered on screen', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ButtonComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(ButtonComponent);

      component = fixture.componentInstance;
      element = fixture.debugElement;

      fixture.detectChanges();
    });

    it('Then you should see it on screen', () => {
      expect(component).toBeTruthy();
    });

    it('And you click the button then the function onClick should be called', fakeAsync(() => {
      spyOn(component.userClick, 'emit');

      const button = element.nativeElement.querySelector('button');

      button.click();

      tick();

      expect(component.userClick.emit).toHaveBeenCalled();
    }));

    it('And it is given a class modifier then the class should be reflected', () => {
      component.classModifier = 'buy';

      fixture.detectChanges();

      const button = element.query(By.css('button'));

      expect(button.nativeElement.className).toBe('buy--button');
    });
  });
});
