import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro, MDBSpinningPreloader, AccordionModule, WavesModule } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { FormsModule } from '@angular/forms';
import { MdbWysiwygModule } from 'mdb-wysiwyg';
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    MdbWysiwygModule,
    AccordionModule,
    WavesModule,
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
