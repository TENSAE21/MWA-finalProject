import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { QuestonsComponent } from './questons/questons.component';


const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    { 
        path: 'questions',component: QuestonsComponent,canActivate:[AuthGuard]
    },
    { 
        path: 'list', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule), canActivate:[AdminGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
  
];

@NgModule({
  imports: [CommonModule,
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 