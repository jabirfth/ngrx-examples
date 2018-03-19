import { Component } from '@angular/core';
import { InboxService } from '../inbox.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { InboxState } from '../store/inbox.reducer';

import * as inboxActions from '../store/inbox.actions';
import * as fromInboxStore from '../store/inbox.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  unread$: Observable<number>;

  constructor(private store: Store<InboxState>) {
    this.unread$ = this.store.select(fromInboxStore.getUnread);
  }

  onRead() {
    this.store.dispatch(new inboxActions.ReadAll());
  }

}
