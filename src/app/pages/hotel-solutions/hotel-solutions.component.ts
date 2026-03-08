import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-solutions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hotel-solutions.component.html',
  styleUrl: './hotel-solutions.component.css'
})
export class HotelSolutionsComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.animate, .animate-left, .animate-right').forEach(el => {
      this.observer?.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
