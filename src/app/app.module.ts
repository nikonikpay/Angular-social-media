import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserModule} from '@angular/platform-browser';
import {environment} from "src/environments/environment";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
            declarations: [
              AppComponent,
              TopbarComponent,
              LoginComponent,
              CreateAccountComponent,
              PostsComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              MatButtonModule,
              MatFormFieldModule,
              MatInputModule,
              MatSnackBarModule,
              ReactiveFormsModule,
              HttpClientModule,
              MatIconModule,
              MatMenuModule,
              MatCardModule,
              AngularFireModule.initializeApp(environment.firebaseConfig),
              NgxMatFileInputModule,
              AngularFireStorageModule,
              FormsModule


            ],
            providers   : [],
            bootstrap   : [AppComponent]
          })
export class AppModule {
}
