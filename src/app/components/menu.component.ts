import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector:'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.css'],
    
})


export class MenuComponent{
     selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }

}