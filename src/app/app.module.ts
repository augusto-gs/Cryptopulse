import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoinListModule } from './coin-list/coin-list.module';
import { CoinDetailModule } from './coin-detail/coin-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoinListModule,
    CoinDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
