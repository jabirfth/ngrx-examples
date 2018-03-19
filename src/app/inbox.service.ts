import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InboxService {

  private inbox = {
    'threads': [
      { id: '1', messages: ['', ''], unread: 2 },
      { id: '2', messages: ['', '', '', '', ''], unread: 5 },
      { id: '3', messages: ['', '', ''], unread: 3 },
    ],
    unread: 10
  };

  constructor() { }

  getThreads() {
    return Observable.of(this.inbox);
  }

  readOne(threadId: string) {
    const threadUnread = this.inbox.threads.find(thread => thread.id === threadId).unread;
    this.inbox.threads.find(thread => thread.id === threadId).unread = 0;
    this.inbox.unread -= threadUnread;
  }

  readAll() {
    this.inbox.threads.forEach(thread => thread.unread = 0);
    this.inbox.unread = 0;
  }

}
