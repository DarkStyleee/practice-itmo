import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewArticlePage } from './view-article.page';

import { IonicModule } from '@ionic/angular';

import { ViewArticlePageRoutingModule } from './view-article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewArticlePageRoutingModule,
  ],
  declarations: [ViewArticlePage],
})
export class ViewArticlePageModule {}
