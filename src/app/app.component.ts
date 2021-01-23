import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test2';
  text: string = '';

  addArticle() {
    this.text = 'Nekoja vrednost';
  }
}
