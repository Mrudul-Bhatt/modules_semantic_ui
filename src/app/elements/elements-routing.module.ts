import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

//laze loading, path is the url which is relative to AppRoutingModule, loadChildren is the module to load
const routes: Routes = [{ path: '', component: ElementsHomeComponent }];

//no lazy loading
// const routes: Routes = [{ path: 'elements', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
