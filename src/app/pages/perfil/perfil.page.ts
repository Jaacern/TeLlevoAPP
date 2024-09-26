import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
  
  viajes = [
    { id:'1',fecha: '2024-09-21', conductor: 'Miguel lopez', lugar: 'Duoc' },
    { id:'2',fecha: '2024-09-22', conductor: 'Alejandro Silva', lugar: 'Uss' },
    { id:'3',fecha: '2024-09-23', conductor: 'Lucas Rodriguez', lugar: 'Inacap' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
