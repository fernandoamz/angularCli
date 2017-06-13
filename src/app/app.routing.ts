import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componente
import { InformacionEmpleado } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes : Routes = [
    { path: '', component: InformacionEmpleado },
    { path: 'empleado',component: InformacionEmpleado },
    { path: 'fruta',component: FrutaComponent },
    { path: '**', component: InformacionEmpleado }
];

export const appRoutingProviders : any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);