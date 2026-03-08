import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  values = [
    { icon: 'lightning', title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible in hospitality technology.' },
    { icon: 'heart', title: 'Customer-Centricity', desc: 'Every decision is guided by the success and satisfaction of our clients.' },
    { icon: 'users', title: 'Collaboration', desc: 'We work as true partners with our clients, not just technology vendors.' },
    { icon: 'chart', title: 'Data-Driven', desc: 'We believe in the power of data to inform smarter business decisions every day.' },
    { icon: 'refresh', title: 'Adaptability & Agility', desc: 'Staying ahead of industry trends and adapting swiftly to evolving needs.' },
    { icon: 'book', title: 'Continuous Learning', desc: 'Our team is always growing, always certified on the latest Oracle technology.' },
    { icon: 'shield', title: 'Ethical Practices', desc: 'Integrity and transparency form the foundation of every client relationship.' },
  ];

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
