import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AboutComponent } from './components/about/about.component';
import { HistoryComponent } from './components/history/history.component';
import { AcademyComponent } from './components/academy/academy.component';
import { CapacityComponent } from './components/capacity/capacity.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './components/add/add.component';
import { SinglehistoryComponent } from './components/singlehistory/singlehistory.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { SingleskillComponent } from './components/singleskill/singleskill.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, PortInterceptorService } from './interceptors/port-interceptor.service';

PortInterceptorService

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    IconsComponent,
    LoginComponent,
    BannerComponent,
    PerfilComponent,
    AboutComponent,
    HistoryComponent,
    AcademyComponent,
    CapacityComponent,
    ProyectsComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    SinglehistoryComponent,
    EducationComponent,
    ProjectComponent,
    SingleskillComponent,
    



  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
