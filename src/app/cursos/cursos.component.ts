import { Component, OnInit } from '@angular/core';
import { Cursos } from './cursos';
import { CursosService } from './cursos.service';
import { CursosDetail } from './cursosDetail';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosService: CursosService) { }
  cursos: Array<Cursos> = [];
  certificate: number[] = [];
  selectedCurso!: CursosDetail;
  selected: boolean = false;

  getCursos() {
    this.cursosService.getCursos().subscribe(cursos => {
      cursos.forEach(curso => {
        if (curso.offers_certificate == true) {
          this.certificate.push(curso.id);
        }
        this.cursos = cursos;
      });
    });
  }

  onSelected(c: CursosDetail) {
    this.selected = true;
    this.selectedCurso = c;
    }

  ngOnInit() {
    this.getCursos();
  }
}
