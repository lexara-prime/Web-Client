import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => import('./interface/interface.component')
        .then(component => component.InterfaceComponent)
    }
];

