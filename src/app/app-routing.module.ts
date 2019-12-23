import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {WhoWeAreComponent} from './pages/who-we-are/who-we-are.component';
import {OurServicesComponent} from './pages/our-services/our-services.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {PropertiesComponent} from './pages/properties/properties.component';
import {PropertyDetailComponent} from './pages/property-detail/property-detail.component';
import { PoliticasDePrivacidadComponent } from './pages/politicas-de-privacidad/politicas-de-privacidad.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'propiedades',
    component: PropertiesComponent
  },
  {
    path: 'propiedades/:id',
    component: PropertyDetailComponent
  },
  {
    path: 'quienes-somos',
    component: WhoWeAreComponent
  },
  {
    path: 'servicios',
    component: OurServicesComponent
  },
  {
    path: 'contactanos',
    component: ContactUsComponent
  },
  {
    path: 'politicas-de-privacidad',
    component: PoliticasDePrivacidadComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
