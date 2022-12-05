import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  //exporting this component so it is available in app component, import this element module in app.module.ts
  exports: [ElementsHomeComponent],
})
export class ElementsModule {}
