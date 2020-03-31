import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ServiceChgColorDirective } from './service/service-chg-color.directive';
import { WhyusComponent } from './whyus/whyus.component';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookOpen, faLightbulb, faHandshake, faHeart, faChartBar, faComments, faSmileWink } from '@fortawesome/free-solid-svg-icons';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServiceComponent,
    ContactComponent,
    ServiceChgColorDirective,
    WhyusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgxPageScrollModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faBookOpen, faLightbulb, faHandshake, faComments, faSmileWink, faHeart, faChartBar);
  }
}
