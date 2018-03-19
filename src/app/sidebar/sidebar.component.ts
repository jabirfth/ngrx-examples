import { Component } from '@angular/core';
import { InboxService } from '../inbox.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { InboxState } from '../store/inbox.reducer';

import * as inboxActions from '../store/inbox.actions';
import * as fromInboxStore from '../store/inbox.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  unread$: Observable<number>;

  constructor(private store: Store<InboxState>) {
    this.unread$ = this.store.select(fromInboxStore.getUnread);
  }

  onRead() {
    this.store.dispatch(new inboxActions.ReadAll());
  }

}
