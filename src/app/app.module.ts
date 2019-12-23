import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';

import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {OurServicesComponent} from './pages/our-services/our-services.component';
import {PropertyCardComponent} from './components/property-card/property-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {WhoWeAreComponent} from './pages/who-we-are/who-we-are.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PropertiesComponent} from './pages/properties/properties.component';
import {PropertyDetailComponent} from './pages/property-detail/property-detail.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {AgentInfoComponent} from './components/agent-info/agent-info.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {MapComponent} from './components/map/map.component';
import {HtmlPipe} from './pipes/html.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { PoliticasDePrivacidadComponent } from './pages/politicas-de-privacidad/politicas-de-privacidad.component';


export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: {enable: false},
    rotate: {enable: false}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OurServicesComponent,
    PropertyCardComponent,
    FooterComponent,
    WhoWeAreComponent,
    ContactUsComponent,
    NavbarComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    SearchBarComponent,
    AgentInfoComponent,
    MapComponent,
    HtmlPipe,
    LoadingComponent,
    FormEmailComponent,
    PoliticasDePrivacidadComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
    NgxGalleryModule,
    NgxPaginationModule,
    FacebookModule.forRoot()
  ],
  entryComponents: [],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
