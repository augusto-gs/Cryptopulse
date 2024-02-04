import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { RouterModule } from '@angular/router';
import { CoinComponent } from './coin/coin.component';

@NgModule({
  declarations: [CoinListComponent, CoinComponent],
  imports: [CommonModule, RouterModule],
  exports: [CoinListComponent],
})
export class CoinListModule {}
