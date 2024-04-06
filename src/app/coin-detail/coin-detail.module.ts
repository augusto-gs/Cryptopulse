import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoinDetailComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CoinDetailComponent],
})
export class CoinDetailModule {}
