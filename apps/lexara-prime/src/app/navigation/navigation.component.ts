import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUserGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lexara-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <header>
      <!-- SIDE BAR TOGGLE -->
      <a class="side-bar-toggle-wrapper">
        <fa-icon [icon]="homeIcon" class="nav-icon"></fa-icon>
      </a>

      <!-- USER SECTION -->
      <div class="user-menu">
        <a class="user-menu-toggle">
          <fa-icon [icon]="userIcon" class="nav-icon"></fa-icon>
        </a>
      </div>
    </header>
  `,
  styles: `
   header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
   }
   
   header .side-bar-toggle-wrapper .nav-icon,
   header .user-menu .user-menu-toggle .nav-icon {
    font-size: 1.5rem;
    color: var(--folly);
    border-radius: 50%;
    background: var(--licorice);
    padding: .6rem .7rem;
    cursor: pointer;
    opacity: .7;
    transition: .4s all ease;
  }
 
 header .side-bar-toggle-wrapper .nav-icon:hover,
 header .user-menu .user-menu-toggle .nav-icon:hover {
     opacity: 1;
     transform: translateY(-3px);
     box-shadow: var(--level-1);
 }
`,
})
export class NavigationComponent {
  // ICONS
  homeIcon = faHome;
  userIcon = faUserGear;
}
