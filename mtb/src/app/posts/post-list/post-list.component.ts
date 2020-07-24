import { Component } from "@angular/core";
import { AccordionModule, WavesModule } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: 'This is the first post\'s content' },
    { title: 'Second Post', content: 'This is the second post\'s content' },
    { title: 'Third Post', content: 'This is the third post\'s content' },
  ];
}