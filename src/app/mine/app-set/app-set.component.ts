import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-set',
  templateUrl: './app-set.component.html',
  styleUrls: ['./app-set.component.less']
})
export class AppSetComponent implements OnInit {
  app: any = window['appInfo'];
  constructor() {
    console.log(this.app);
  }

  ngOnInit() {
  }

}
