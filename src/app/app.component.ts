import { Component } from '@angular/core';
import { InboxState } from './store/inbox.reducer';
import { Store } from '@ngrx/store';

import * as inboxActions from './store/inbox.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<InboxState>) {
    this.store.dispatch(new inboxActions.Fetch);
  }
}
