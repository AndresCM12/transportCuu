import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('./pages/map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: 'registros',
        loadChildren: () =>
          import('./pages/registros/registros.module').then(
            (m) => m.RegistrosPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
