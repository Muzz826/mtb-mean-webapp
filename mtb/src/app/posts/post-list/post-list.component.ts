import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  // settings for how many posts to show her page
  postsPerPage = 2;
  // what page to start on
  currentPage = 1;
  // setting to change how many posts per page as a user.
  pageSizeOptions = [1, 2, 5, 10];
  // user must be logged into to see posts
  userIsAuthenticated = true;

  userId: string;
  private postsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public postsService: PostsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // checks to see if page has finished loading
    this.isLoading = true;
    // grabs all posts for the current page to display
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    // lists userid of post creator for current page of posts
    this.userId = this.authService.getUserId();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((postData: { posts: Post[]; postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      });
      // checks whether user is logged in to see posts
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }
// logic for changing post pages
  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }
// logic for what actions that happen when a post is deleted.
  onDelete(postId: string) {
    // checks wither page is loaded for delting a post
    this.isLoading = true;
    // deleting of post action
    this.postsService.deletePost(postId).subscribe(() => {
      // refreshes page and gets new list of current posts
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    }, () => {
      // checks whether loading has finished
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
