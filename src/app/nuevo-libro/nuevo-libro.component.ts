import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';
import { GeneroServiceService } from '../genero-service.service';



@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  @Output() agregarUnNuevoLibro = new EventEmitter();

  book = {
    name: "",
    author: "",
    gender: ""
  };


  genders: any;


  constructor(private librosService: LibroServiceService, private generoService: GeneroServiceService) { }

  ngOnInit(): void {

    this.genders = this.generoService.listaGeneros();

    //console.log('generos ', this.genders);

  }

  name = '';
  author = '';
  gender = '';
  

  async agregarLibro(){
    
    var book = {
      name: this.name,
      author: this.author,
      gender: this.gender
    }


    var respuesta: any;

    respuesta = await this.librosService.guardarLibro(book);

    this.agregarUnNuevoLibro.emit();
    
    console.log(book);


  }

}
