import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.initScrollAnimations();
    this.initCounters();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private initScrollAnimations() {
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

  private initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset['count'] || '0', 10);
            const suffix = el.dataset['suffix'] || '';
            this.animateCount(el, target, suffix);
            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => countObserver.observe(el));
  }

  private animateCount(el: HTMLElement, target: number, suffix: string) {
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
