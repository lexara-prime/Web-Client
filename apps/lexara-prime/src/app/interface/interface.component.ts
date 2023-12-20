import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'lexara-interface',
  standalone: true,
  imports: [CommonModule, SideBarComponent, NavigationComponent],
  template: `
  
`,
  styles: ``,
})
export class InterfaceComponent {}
