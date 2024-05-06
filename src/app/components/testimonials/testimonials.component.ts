import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})

export class TestimonialsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  private notificationSubscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    // Simular notificación de inicio de live
    this.showNotification({
      id: 1,
      message: 'El canal "Nombre del canal" ha comenzado un live',
      type: 'info'
    });
  }

  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
  }

  closeNotification(id: number): void {
    this.hideNotification(id);
  }

  showNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  hideNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }
}