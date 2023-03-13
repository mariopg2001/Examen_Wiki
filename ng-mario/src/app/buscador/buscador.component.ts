import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  observable: any;
  observable2: any;
  constructor(private wikiService: WikipediaService ){}

  buscar() {
    let input: any= document.getElementById('buscador')
    let url: any = 'https://es.wikipedia.org/w/api.php?action=opensearch&search='+input.value+'&limit=10&namespace=0&format=json&origin=*'
    this.wikiService.getbuscar(url).subscribe(pagina => this.observable = pagina)
    console.log(this.observable)
  }
  verContribuidores(pagina: any){
    let url: any = 'https://es.wikipedia.org/w/api.php?action=query&prop=contributors&titles='+pagina+'&format=json&origin=*'
    this.wikiService.verContribuidores(url).subscribe(pagina2 => this.observable2= pagina2.query.pages[223607].contributors)
    console.log(this.observable2.query.pages[223607].contributors)
    console.log(url)
    

  
  }
}
