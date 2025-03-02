import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];  

  ngOnInit() {
      this.menuItems = [
          {
            label: 'Ejercicios aplicados',
            icon: 'pi pi-desktop',
            items:[
              {
                label:'Angular',
                icon:'pi pi-align-left',
                routerLink:'/'
              },
              {
                label:'C#,Net CORE. entityframework',
                icon:'pi pi-dollar',
                routerLink:'csharp'
              },
              {
                label:'Javascript ',
                icon:'pi pi-globe',
                routerLink:'uncommon'
              }
            ]
          },
          {
            label: 'Pipes personalizados',
            icon:'pi pi-cog',
            items:[
              {
                label:'Custom Pipes',
                icon:'pi pi-cog',
                routerLink:'custom'
              }
            ]
          }
      ];
  }
 
}
