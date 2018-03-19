import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InboxService } from './inbox.service';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StoreModule } from '@ngrx/store';
import { inboxReducer } from './store/inbox.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({inbox: inboxReducer})
  ],
  providers: [InboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
