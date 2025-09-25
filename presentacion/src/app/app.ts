
// Declaración global para evitar error de TypeScript
declare global {
  interface Window {
    Notiflix: any;
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = 'prueba';

  ngAfterViewInit() {
    if (window.Notiflix && window.Notiflix.Notify) {
      window.Notiflix.Notify.init({
        position: 'right-bottom',
        width: '320px',
        fontSize: '18px',
        success: {
          background: '#43A047',
          textColor: '#fff',
        },
        failure: {
          background: '#d32f2f',
          textColor: '#fff',
        },
      });
      window.Notiflix.Notify.success('EQUIPO BIMBO');
    }
  }
}
