import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent],
  //Component are not imported as they arent standalone components, they need to be imported via module
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
