import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbUserModule, NbUserComponent } from '@nebular/theme';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          loadChildren: './admin/admin.module#TestplanAdminModule'
        },
        {
          path: 'user',
          component: NbUserComponent
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class TestplanAppRoutingModule {}
