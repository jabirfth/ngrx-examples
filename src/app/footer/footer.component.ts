import { Component } from '@angular/core';
import { InboxService } from '../inbox.service';

import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { InboxState } from '../store/inbox.reducer';

import * as inboxActions from '../store/inbox.actions';
import * as fromInboxStore from '../store/inbox.reducer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  threads$: Observable<any[]>;

  constructor(private store: Store<InboxState>) {
    this.threads$ = this.store.select(fromInboxStore.getThreads);
  }

  onRead(threadId: string) {
    this.store.dispatch(new inboxActions.ReadOne(threadId));
  }

}
