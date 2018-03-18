import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { i18nReducer } from './i18n.reducer';

import { AppComponent } from './app.component';
import { MatModule } from './mat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    StoreModule.forRoot({ i18n: i18nReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
