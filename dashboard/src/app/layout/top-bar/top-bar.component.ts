import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menu!: any[];
  selectedCity: any;

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      { title: 'Início', path: 'NY', icon: 'pi pi-home' },
      { title: 'Seu perfil', path: 'NY', icon: 'pi pi-user' },
      { title: 'Ajuda', path: 'NY', icon: 'pi pi-question-circle' },
      { title: 'Seu dinheiro', path: 'NY', icon: 'pi pi-wallet' },
      { title: 'Atividade', path: 'NY', icon: 'pi pi-briefcase' },
    ];
  }

}
