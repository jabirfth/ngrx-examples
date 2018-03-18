import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  unread = 0;

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
    this.checkUnread();

    setInterval(() => this.checkUnread(), 2000);
  }

  private checkUnread() {
    this.inboxService.getThreads()
      .map(threads => threads.unread)
      .subscribe(
        unread => this.unread = unread
      );
  }


  onRead() {
    this.inboxService.readAll();
    this.checkUnread();
  }

}
