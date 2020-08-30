import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prestar-libro',
  templateUrl: './prestar-libro.component.html',
  styleUrls: ['./prestar-libro.component.css']
})
export class PrestarLibroComponent implements OnInit {

  @Input() librosPrestados = [];

  constructor() { }

  ngOnInit(): void {
  }

}
