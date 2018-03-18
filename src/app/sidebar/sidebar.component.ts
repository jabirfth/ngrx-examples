import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
