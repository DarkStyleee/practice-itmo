import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Article } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.page.html',
  styleUrls: ['./view-article.page.scss'],
})
export class ViewArticlePage implements OnInit {
  public article!: Article;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.data.getArticleById(parseInt(id, 10)).subscribe((data: Article) => {
      this.article = data;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
