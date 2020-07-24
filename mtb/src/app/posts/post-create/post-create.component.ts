import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { PostsService } from "../posts.service";
import { Post } from '../post.model';
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      required: new FormControl(null, Validators.required)
    });

  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
      }
      const post: Post = {
        title: form.value.title,
        content: form.value.content,
      };
      this.postCreated.emit(post);
  }
}
