import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;
  isSubmitting = false;

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

  onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitted = true;
      this.isSubmitting = false;
    }, 1500);
  }
}
