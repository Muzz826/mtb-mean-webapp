import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

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

import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { WavesModule, ButtonsModule, IconsModule } from 'ng-uikit-pro-standard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TechTutorialsComponent } from './tech-tutorials/tech-tutorials.component';
import { TechReviewsComponent } from './tech-reviews/tech-reviews.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TechTutorialsComponent,
    TechReviewsComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    IconsModule,
    AgmCoreModule.forRoot({}),
    HttpClientModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    AngularMaterialModule,
    PostsModule,
    AngularMaterialModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
            {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ],
  entryComponents: [ErrorComponent],
})
export class AppModule { }
