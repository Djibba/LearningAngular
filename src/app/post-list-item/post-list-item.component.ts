import {Component, Input, OnInit} from '@angular/core';
import { PostListComponent} from '../post-list/post-list.component';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;



  constructor() { }

  ngOnInit(): void {

  }

  onAjout(){
    this.loveIts++;
  }

  onDiminue(){
    this.loveIts--;
  }

}
