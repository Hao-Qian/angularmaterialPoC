import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import { Routes, RouterModule}  from '@angular/router';
import { DemoModule } from './demo/demo.module';

const routes: Routes =[
  { path:'demo',loadChildren:'./demo/demo.module#DemoModule' },
  { path:'**',redirectTo:'demo' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
