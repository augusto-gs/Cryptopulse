import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [HeaderComponent, CapitalizePipe],
  imports: [CommonModule],
  exports: [HeaderComponent, CapitalizePipe],
})
export class SharedModule {}
