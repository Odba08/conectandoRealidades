import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NoticeComponent } from './components/notice/notice.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiaUnoComponent } from './pages/noticias/noticia-uno/noticia-uno.component';
import { NoticiaDosComponent } from './pages/noticias/noticia-dos/noticia-dos.component';
import { NoticiaTresComponent } from './pages/noticias/noticia-tres/noticia-tres.component';
import { NoticiaCuatroComponent } from './pages/noticias/noticia-cuatro/noticia-cuatro.component';
import { NoticiaCincoComponent } from './pages/noticias/noticia-cinco/noticia-cinco.component';
import { ContactoComponent } from './pages/menu/contacto/contacto.component';
import { CronicasComponent } from './pages/menu/cronicas/cronicas.component';
import { SobreNosotrosComponent } from './pages/menu/sobre-nosotros/sobre-nosotros.component';
import { OneComponent } from './pages/secondnotices/one/one.component';
import { TwoComponent } from './pages/secondnotices/two/two.component';
import { ThreeComponent } from './pages/secondnotices/three/three.component';
import { FouthComponent } from './pages/secondnotices/fouth/fouth.component';
import { FiveComponent } from './pages/secondnotices/five/five.component';
import { SixComponent } from './pages/secondnotices/six/six.component';
import { SevenComponent } from './pages/secondnotices/seven/seven.component';
import { EigthComponent } from './pages/secondnotices/eigth/eigth.component';
import { ReportajeComponent } from './pages/secondnotices/reportaje/reportaje.component';
import { EcosustentableComponent } from './pages/menu/ecosustentable/ecosustentable.component';
import { SostenibilidadComponent } from './pages/menu/sostenibilidad/sostenibilidad.component';
import { ConectandorealidadesComponent } from './pages/menu/conectandorealidades/conectandorealidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NoticeComponent,
    FooterComponent,
    NoticiaUnoComponent,
    NoticiaDosComponent,
    NoticiaTresComponent,
    NoticiaCuatroComponent,
    NoticiaCincoComponent,
    ContactoComponent,
    CronicasComponent,
    SobreNosotrosComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FouthComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EigthComponent,
    ReportajeComponent,
    EcosustentableComponent,
    SostenibilidadComponent,
    ConectandorealidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
