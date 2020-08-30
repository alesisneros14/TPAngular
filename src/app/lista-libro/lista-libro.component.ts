import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})
export class ListaLibroComponent implements OnInit {

  @Input() libros = [];

  @Output() agregarLibroPrestado = new EventEmitter;

  name = '';
  author = '';
  gender = '';
  lended = '';

  constructor(private librosService: LibroServiceService) { }

  ngOnInit(): void {
  }

  async prestarLibro(){
    
    var libroPrestado = {

      name: this.name,
      author: this.author,
      gender: this.gender,
      lended: this.lended

    }

    var respuesta: any;

    respuesta = await this.librosService.listaPrestados();
    

    this.agregarLibroPrestado.emit();

  }

}
