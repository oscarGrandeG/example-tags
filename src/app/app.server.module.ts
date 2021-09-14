import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Meta, Title } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {
    this.onHandleTags();
  }

  onHandleTags(): void {
    console.log('ngOnInit')
    console.log(':::::ngOnInit:::::');
    this.titleService.setTitle('Home-Tu Depa');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.2.10 et bootstrap 4.6.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });

  }

}
