import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isSolutionsOpen = false;
  currentYear = new Date().getFullYear();

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isSolutionsOpen = false;
    }
  }

  toggleSolutions(event: Event) {
    event.stopPropagation();
    this.isSolutionsOpen = !this.isSolutionsOpen;
  }

  closeAll() {
    this.isMobileMenuOpen = false;
    this.isSolutionsOpen = false;
  }
}
