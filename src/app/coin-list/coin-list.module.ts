import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoinListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CoinListComponent],
})
export class CoinListModule {}
