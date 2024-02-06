import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cr-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input({ required: true })
  isDisabled = false;

  @Input()
  classModifier!: string;

  @Output()
  userClick = new EventEmitter();

  onClick(): void {
    this.userClick.emit();
  }
}
