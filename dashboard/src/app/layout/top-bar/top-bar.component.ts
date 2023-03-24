import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from '../menu/menu';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menu = MENU;
  selectedCity: any;
  display = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  goTo(item: any) {
    this.router.navigateByUrl(item.path);
    this.display = false;
  }
}
