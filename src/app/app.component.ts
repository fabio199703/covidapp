import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages: any[] = [
    {title: 'Inicio', url: '/home', icon: 'home'},
    {title: 'Perfil', url: '/profile', icon: 'person'},
    {title: 'Configuraciones', url: '/about', icon: 'information-circle'},
    {title: 'Politica & Privacidad', url: '/privacy', icon: 'document-lock'},
    {title: 'Cerrar', url: '', icon: 'log-out', route: true},
  ];
  constructor() {}



  signOut(){
    console.log('singout');
  }
}
