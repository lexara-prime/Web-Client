import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InterfaceComponent } from './interface/interface.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  standalone: true,
  imports: [RouterModule, InterfaceComponent, NavigationComponent, SideBarComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lexara-prime';
}
