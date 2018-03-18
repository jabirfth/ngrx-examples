import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

interface I18nState {
  i18n: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  message$: Observable<string>;

  readonly locals = ['FR', 'EN'];

  constructor(private store: Store<I18nState>) {
    this.message$ = this.store.select('i18n');
  }

  ngOnInit() {
    this.onTranslate(this.locals[0]);
  }

  onTranslate(local: string) {
    this.store.dispatch({ type: local });
  }
}
