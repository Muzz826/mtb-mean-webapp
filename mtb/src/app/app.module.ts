import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
