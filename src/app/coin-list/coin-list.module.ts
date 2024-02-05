import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './coin-list/coin-list.component';
import { RouterModule } from '@angular/router';
import { CoinComponent } from './coin/coin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoinListComponent, CoinComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CoinListComponent],
})
export class CoinListModule {}
