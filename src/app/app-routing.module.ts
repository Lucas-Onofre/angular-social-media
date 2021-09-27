import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', redirectTo: 'timeline', pathMatch: 'full'},
  {path: 'new-post', component: NewPostComponent},
  {path: 'timeline', component: TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
