import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyComps1Component } from './components/dummy-comps1/dummy-comps1.component';
import { DummyComps2Component } from './components/dummy-comps2/dummy-comps2.component';


const routes: Routes = [
  {
    path: 'dummy2', component: DummyComps2Component
  },
  
  {
    path: 'dummy1', component: DummyComps1Component
  }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
