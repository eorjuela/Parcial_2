import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { CursosDetail } from '../cursosDetail';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.css']
})
export class CursosDetailComponent implements OnInit {

  cursoId!: string;
  @Input() cursoSelected!: CursosDetail;
  
  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit() {
  }

}
