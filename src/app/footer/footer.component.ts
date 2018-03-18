import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  threads: any[] = [];

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
    this.fetchThreads();

    setInterval(() => this.fetchThreads, 2000);
  }

  private fetchThreads() {
    this.inboxService.getThreads()
      .map(inbox => inbox.threads)
      .subscribe(
        threads => this.threads = threads
      );
  }

  onRead(threadId: string) {
    this.inboxService.read(threadId);
    this.fetchThreads();
  }

}
