import { Component, OnInit } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';
import { GeneroServiceService } from '../genero-service.service';



@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  lista:any = [];

  listaPrestados:any = [];

  constructor(private libroService: LibroServiceService, private generoService: GeneroServiceService) { }


  async ngOnInit() {

    this.lista = await this.libroService.listaDeLibros();

    this.listaPrestados = await this.libroService.listaPrestados();

  }


  async agregarLibroALista(){

    this.lista = await this.libroService.listaDeLibros();

    //this.lista.push(unLibro);

  }

  async agregarLibroPrestado(){

    this.listaPrestados = await this.libroService.listaPrestados();

    //this.listaPrestados.push(libroPrestado);
  }

}
