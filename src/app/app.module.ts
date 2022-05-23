import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatCommonModule} from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageEntitiesComponent } from './manage-entities/manage-entities.component';
import { SetupSemComponent } from './setup-sem/setup-sem.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TabTemplateComponent } from './tab-template/tab-template.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from "./auth-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    ManageEntitiesComponent,
    SetupSemComponent,
    SchedulesComponent,
    HomeComponent,
    HeaderComponent,
    TabTemplateComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
