import { Component } from '@angular/core';
@Component({
  selector: 'practicas-bases',
  templateUrl: './bases.component.html',

})
export class BasesComponent {

  abrirEnlaceBaseApp() {
    window.open('https://basesapps.netlify.app/', '_blank');
  }
  abrirEnlaceGitBAseApp() {
    window.open('https://github.com/chomper12/angular-primeros-pasos.git', '_blank');
  }

  //GifsApp
  abrirEnlaceGifsapp()
  {
    window.open('https://gifssapp.netlify.app/', '_blank');
  }
  abrirEnlaceGitGifsApp(){
    window.open('https://github.com/chomper12/GifsAp.git', '_blank');
  }

  //countryApp
  abrirEnlaceCountyapp(){
    window.open('https://countrysapps.netlify.app/','_blank');
  }
  abrirEnlaceGitCountryApp()
  {
    window.open('https://github.com/chomper12/Country.git','_blank')
  }
  
  //pipeApp
  abrirEnlacePipeApp(){
    window.open('https://pipesapps.netlify.app/','_blank');
  }

  abrirEnlaceGitPipeApp(){
    window.open('https://github.com/chomper12/PipesApp.git','_blank');
  }

  //HeroesApp
  abrirEnlaceHeroesApp(){
    window.open('https://heroessapp.netlify.app','_blank')
  }
  abrirEnlaceGitHeroesApp(){
    window.open('https://github.com/chomper12/HeroesApp','_blank')
  }

  //FormsApp
  abrirEnlaceFormsApp(){
    window.open('https://formsapps.netlify.app','_blank');
  }
  abrirEnlaceGitFormsApp(){
    window.open('https://github.com/chomper12/FormsApp.git','_blank')
  }
}
