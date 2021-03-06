/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementApiComponent } from './element-api/element-api.component';

@NgModule({
  declarations: [ElementApiComponent],
  exports: [ElementApiComponent],
  imports: [CommonModule],
})
export class SharedModule {}
