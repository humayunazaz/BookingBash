import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { appRoutingModule } from './app-routing.module';
import { AppService } from './app-service.service';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { BsLoaderComponent } from './bs-loader/bs-loader.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeMovieComponent } from './home-component/home-movie/home-movie.component';
import { MovieTabsComponent } from './home-component/home-movie/movie-tabs/movie-tabs.component';
import { MovieSliderComponent } from './home-component/home-movie/movie-tabs/movie-slider/movie-slider.component';
import { BsMovieComponent } from './home-component/home-movie/movie-tabs/movie-slider/bs-movie/bs-movie.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { HomeEventComponent } from './home-component/home-event/home-event.component';
import { EventTabsComponent } from './home-component/home-event/event-tabs/event-tabs.component';
import { EventSliderComponent } from './home-component/home-event/event-tabs/event-slider/event-slider.component';
import { HomeActivityComponent } from './home-component/home-activity/home-activity.component';
import { BsActivityComponent } from './home-component/home-activity/bs-activity/bs-activity.component';
import { BsActComponent } from './home-component/home-activity/bs-activity/bs-act/bs-act.component';
import { HomeNightlifeComponent } from './home-component/home-nightlife/home-nightlife.component';
import { HomeVideoComponent } from './home-component/home-video/home-video.component';
import { HomeSubscribeComponent } from './home-component/home-subscribe/home-subscribe.component';
import { BsOtherComponent } from './bs-other/bs-other.component';
import { BsFootComponent } from './bs-other/bs-foot/bs-foot.component';
import { BsFooterComponent } from './bs-footer/bs-footer.component';
import { BsModalComponent } from './bs-modal/bs-modal.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { BsnavMenuComponent } from './movie-component/bsnav-menu/bsnav-menu.component';
import { DateSeparatorPipe } from './date-separator-pipe.pipe';
import { TrailorComponentComponent } from './movie-component/trailor-component/trailor-component.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { ActivityComponentComponent } from './activity-component/activity-component.component';
import { ActivityModalComponent } from './activity-component/activity-modal/activity-modal.component';
import { BsActiveComponent } from './activity-component/bs-active/bs-active.component';
import { NightlifeComponentComponent } from './nightlife-component/nightlife-component.component';
import { DjComponentComponent } from './dj-component/dj-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { BsBlogComponent } from './blog-component/bs-blog/bs-blog.component';
import { SingleBlogComponent } from './blog-component/single-blog/single-blog.component';
import { SingleMovieComponent } from './movie-component/single-movie/single-movie.component';
import { CastSliderComponent } from './movie-component/single-movie/cast-slider/cast-slider.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignFormComponent } from './sign-up/sign-form/sign-form.component';
import { LoginComponent } from './sign-up/login/login.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SharerComponent } from './sharer/sharer.component';
import { MovieTimingComponent } from './movie-timing/movie-timing.component';
import { TimingPipe } from './timing.pipe';
import { GoogleMapComponent } from './google-map/google-map.component';
import { notFoundComponent } from './404/404.component';
import { Auth } from './auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ContactComponent } from './contact/contact.component';
import { movieRoutingModule } from './movie-component/movie.routing';
import { activityRoutingModule } from './activity-component/activity.routing';
import { nightlifeRoutingModule } from './nightlife-component/nightlife.routing';
import { djsRoutingModule } from './dj-component/dj.routing';
import { eventRoutingModule } from './event-component/event.routing';
import { blogRoutingModule } from './blog-component/blog.routing';
import { briefPipe } from './event-component/brief.pipe';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    AutocompleteComponent,
    ButtonComponent,
    MenuComponent,
    MainSliderComponent,
    BsLoaderComponent,
    HomeComponentComponent,
    HomeMovieComponent,
    MovieTabsComponent,
    MovieSliderComponent,
    BsMovieComponent,
    SectionHeadingComponent,
    HomeEventComponent,
    EventTabsComponent,
    EventSliderComponent,
    HomeActivityComponent,
    BsActivityComponent,
    BsActComponent,
    HomeNightlifeComponent,
    HomeVideoComponent,
    HomeSubscribeComponent,
    BsOtherComponent,
    BsFootComponent,
    BsFooterComponent,
    BsModalComponent,
    MovieComponentComponent,
    BsnavMenuComponent,
    DateSeparatorPipe,
    TrailorComponentComponent,
    EventComponentComponent,
    ActivityComponentComponent,
    ActivityModalComponent,
    BsActiveComponent,
    NightlifeComponentComponent,
    DjComponentComponent,
    BlogComponentComponent,
    BsBlogComponent,
    SingleBlogComponent,
    SingleMovieComponent,
    CastSliderComponent,
    SignUpComponent,
    SignFormComponent,
    LoginComponent,
    BookmarkComponent,
    SharerComponent,
    MovieTimingComponent,
    TimingPipe,
    GoogleMapComponent,
    notFoundComponent,
    ProfileComponent,
    LoginPageComponent,
    LoginModalComponent,
    ContactComponent,
    briefPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    movieRoutingModule,
    activityRoutingModule,
    nightlifeRoutingModule,
    djsRoutingModule,
    eventRoutingModule,
    blogRoutingModule,
    appRoutingModule,
    ReactiveFormsModule,
    DatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwcpA0J1gspv1tvG2Oi60ZkuQKvyd5Lq8'
    })
  ],
  providers: [AppService, AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
