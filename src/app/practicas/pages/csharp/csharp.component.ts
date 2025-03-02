import { Component } from '@angular/core';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styles: ``
})
export class CsharpComponent {

  abrirEnlaceCrudProductosApp() {
    window.open('https://crudproductosprueba.azurewebsites.net/', '_blank');
  }
  abrirEnlaceGitCrudProductosApp() {
    window.open('https://github.com/chomper12/CrudProductos.git', '_blank');
  }
  mostrarAlerta() {
    alert('¡Hola!, estoy en mantemiento aun no me desplegan a produccion.');
  }
}
