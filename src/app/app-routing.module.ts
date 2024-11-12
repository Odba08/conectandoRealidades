import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NoticiaUnoComponent } from './pages/noticias/noticia-uno/noticia-uno.component';
import { NoticiaDosComponent } from './pages/noticias/noticia-dos/noticia-dos.component';
import { NoticiaTresComponent } from './pages/noticias/noticia-tres/noticia-tres.component';
import { NoticiaCuatroComponent } from './pages/noticias/noticia-cuatro/noticia-cuatro.component';
import { NoticiaCincoComponent } from './pages/noticias/noticia-cinco/noticia-cinco.component';
import { CronicasComponent } from './pages/menu/cronicas/cronicas.component';
import { SobreNosotrosComponent } from './pages/menu/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/menu/contacto/contacto.component';
import { OneComponent } from './pages/secondnotices/one/one.component';
import { TwoComponent } from './pages/secondnotices/two/two.component';
import { ThreeComponent } from './pages/secondnotices/three/three.component';
import { FouthComponent } from './pages/secondnotices/fouth/fouth.component';
import { FiveComponent } from './pages/secondnotices/five/five.component';
import { SixComponent } from './pages/secondnotices/six/six.component';
import { SevenComponent } from './pages/secondnotices/seven/seven.component';
import { EigthComponent } from './pages/secondnotices/eigth/eigth.component';
import { ReportajeComponent } from './pages/secondnotices/reportaje/reportaje.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'cronicas',
    component: CronicasComponent
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'noticias',
    component: NoticiaUnoComponent,
  },{
    path: 'noticiasdos',
    component: NoticiaDosComponent,
  },{
    path: 'noticiastres',
    component: NoticiaTresComponent,
  },{
    path: 'noticiascuatro',
    component: NoticiaCuatroComponent,
  },{
    path: 'noticiascinco',
    component: NoticiaCincoComponent,
  },
  {
    path: 'one',
    component: OneComponent,
  },{
    path: 'two',
    component: TwoComponent,
  },{
    path: 'three',
    component: ThreeComponent,
  },{
    path: 'four',
    component: FouthComponent,
  },{
    path: 'five',
    component: FiveComponent,
  },{
    path: 'six',
    component: SixComponent,
  },{
    path: 'seven',
    component: SevenComponent,
  },{
    path: 'eight',
    component: EigthComponent,
  },{
    path: 'reportaje',
    component: ReportajeComponent,
  },
  {
    redirectTo: '',
    pathMatch: 'full',
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
