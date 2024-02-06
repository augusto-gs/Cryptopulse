import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, CapitalizePipe, ButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CapitalizePipe, ButtonComponent],
})
export class SharedModule {}
