import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  message: string;

  readonly locals = ['FR', 'EN'];

  ngOnInit() {
    this.onTranslate(this.locals[0]);
  }

  onTranslate(local: string) {
    this.title = i18n.title[local];
    this.message = i18n.message[local];
  }
}

const i18n = {
  'title': {
    'FR': 'Accueil',
    'EN': 'Home'
  },
  'message': {
    'FR': 'Bienenue à NgRx',
    'EN': 'Welcome to NgRx'
  }
};
