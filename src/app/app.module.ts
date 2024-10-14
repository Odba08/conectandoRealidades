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
    NoticiaCincoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
