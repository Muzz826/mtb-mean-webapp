import { PostsModule } from './posts/posts.module';
import { AngularMaterialModule } from './angular-material.module';
import { ErrorComponent } from './error/error.component';

import { ErrorInterceptor } from './error-interceptor';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { HeaderComponent } from "./header/header.component";

import { MdbWysiwygModule } from 'mdb-wysiwyg';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { WavesModule } from 'ng-uikit-pro-standard'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({}),
    MdbWysiwygModule,
    HttpClientModule,
    WavesModule,
    AngularMaterialModule,
    PostsModule,
    AngularMaterialModule,
    AppRoutingModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
            {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ],
  entryComponents: [ErrorComponent],
})
export class AppModule { }
