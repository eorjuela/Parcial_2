import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursosDetailComponent],
  exports: [CursosComponent]
})
export class CursosModule { }
