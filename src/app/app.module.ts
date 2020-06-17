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
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceChgColorDirective } from './service/service-chg-color.directive';
import { WhyusComponent } from './whyus/whyus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookOpen, faLightbulb, faHandshake, faHeart, faChartBar, faComments, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToggleSideNav } from './navigation/toggleSideNav.service';
import { NavContent } from './navigation/nav-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeResolver } from './home/home.resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve:{images: HomeResolver} },
  { path: "**", redirectTo: "/" }

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
    WhyusComponent,
    SideNavComponent,
    NavContent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPageScrollModule,
    FontAwesomeModule,
  ],
  providers: [ToggleSideNav, HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, private route: ActivatedRoute) {
    library.addIcons(faBookOpen, faLightbulb, faHandshake, faComments, faSmileWink, faHeart, faChartBar);

  }
}
