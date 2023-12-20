import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lexara-side-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SIDE BAR -->
    <div class="side-bar collapsed">
        <!-- SIDE BAR HEADER -->
        <div class="side-bar-header hidden">
            <h3 class="side-bar-title">
                <i class="fa-solid fa-square-plus new-chat-icon"></i>
                    New chat
            </h3>

            <!-- CLOSE BUTTON -->
            <a class="close-btn-wrapper" onclick="fn_CLOSE_SIDE_BAR()">
                <i class="fa-solid fa-circle-xmark close-btn-icon"></i>
            </a>
        </div>

        <!-- SIDE BAR CONTENT -->
        <div class="side-bar-content hidden">
          <!-- CHATS -->
          <a class="chat-history">
            <i class="fa-regular fa-message chat-icon"></i>
              <p class="chat">
                  What is Javascript...
              </p>
          </a>

          <a class="chat-history">
              <i class="fa-regular fa-message chat-icon"></i>

              <p class="chat">
                  How are children made...
              </p>
          </a> 
          
          <a class="chat-history">
              <i class="fa-regular fa-message chat-icon"></i>

              <p class="chat">
                  How are children made...
              </p>
          </a>  
          
          <a class="chat-history">
              <i class="fa-regular fa-message chat-icon"></i>

              <p class="chat">
                  How are children made...
              </p>
          </a>  
        </div>

        <!-- PROFILE INFO. -->
        <div class="profile-info hidden">
          <div class="profile-avatar">
            <img src="./assets/avatars/user.png" alt="profile-avatar">

              <h2 class="profile-name">
                User
              </h2>
          </div>

          <!-- MENU TOGGLE | Additional info, Settings etc -->
          <div class="menu-toggle">
              <a class="menu-toggle-wrapper">
                <i class="fa-solid fa-square-poll-horizontal menu-toggle-icon"></i>
              </a>
          </div>
        </div>
    </div>
  `,
  styles: `
/* STYLING FOR SIDE BAR */
.side-bar {
    background: var(--white-level-1);
    box-shadow: 20px 20px 60px #e6e6e6,
        -20px -20px 60px #e6e6e6;
    border-right: 12px solid var(--white-level-3);
    height: 100%;
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    -webkit-transition: .15s all ease;
    -o-transition: .15s all ease;
    transition: .15s all ease
}

.side-bar.collapsed {
    border-right: none;
    width: 0px;
}

.side-bar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem;
    transition: .4s all ease;
}

.side-bar-header.hidden {
    display: none;
}

/* NEW CHAT ICON */
.new-chat-icon {
    color: var(--folly);
    font-size: 1.4rem;
    cursor: pointer;
}

.new-chat-icon:hover {
    animation: jello-horizontal 1s;
}

.side-bar-title {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    padding: .7rem;
    border-radius: 9px;
    color: var(--folly);
    background: none;
}

.side-bar-content {
    padding: 1rem;
}

.side-bar-content.hidden {
    display: none;
}

/* STYLING FOR HISTORY SECTION */
.chat-history {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 9px;
    background: var(--folly);
    margin-bottom: .5rem;
    opacity: .4;
    transform: scale(.96);
    cursor: pointer;
    transition: .4s all ease;
}

.chat-history:first-child {
    background: var(--white-level-1);
    color: var(--folly);
    box-shadow: var(--level-1);
    transform: scale(1);
    opacity: 1;
}

.chat-history:first-child .chat {
    color: var(--folly);
}

.chat-history:hover {
    box-shadow: var(--level-1);
    transform: scale(1);
    opacity: 1;
}

.chat-icon {
    background: var(--folly);
    border-radius: 9px 0 0;
    border-right: 2px solid var(--white-level-1);
    color: var(--white-level-1);
    padding: 1rem;
}

.close-btn-icon {
    color: var(--folly);
    font-size: 1.8rem;
    cursor: pointer;
}

.chat-history p {
    font-weight: 700;
    font-size: .8rem;
    line-height: 1rem;
    color: var(--white-level-1);
}


/* STYLING FOR PROFILE SECTION */
.profile-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--folly);
    box-shadow: var(--level-2);
    border-radius: 9px 9px 0 0;
    padding: 1rem;
    margin: 1rem;
    margin-bottom: 0;
    width: 260px;
}

.profile-info.hidden {
    display: none;
}

.profile-avatar {
    display: flex;
    align-items: center;
    gap: .3rem;
}

.profile-avatar img {
    background: var(--white-level-1);
    border-radius: 50%;
    border: 3px solid rgb(255, 74, 144);
    box-shadow: var(--level-1);
    padding: .2rem;
    width: 15%;
    cursor: pointer;
}

.profile-name {
    font-size: .9rem;
    font-weight: 700;
    color: var(--white-level-1);
}

.menu-toggle-icon {
    color: var(--white-level-1);
    font-size: 1.8rem;
    cursor: pointer;
}

.menu-toggle-icon:hover {
    box-shadow: var(--level-1);
    transition: .3s all ease;
    animation: jello-horizontal 1s;
}
  `,
})
export class SideBarComponent { }
