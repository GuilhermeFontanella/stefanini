import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu.model';
import { MENU } from '../menu/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menu = MENU
  }

  goTo(item: any) {
    this.router.navigateByUrl(item.path);
  }

}
