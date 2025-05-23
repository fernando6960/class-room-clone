import { Routes } from '@angular/router';

const Dashboard: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((comp) => comp.DashboardComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./content/content.component').then(
            (elm) => elm.ContentComponent,
          ),
      },
      {
        path: 'create-task/:id',
        loadComponent: () =>
          import('./dashboard-profesor/create-task/create-task.component').then(
            (elm) => elm.CreateTaskComponent,
          ),
      },
    ],
  },
];
export default Dashboard;
