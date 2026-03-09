import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="member-badge">
      <span>👤 {{ name }}</span>
      <button (click)="remove.emit()" aria-label="Remove member">×</button>
    </div>
  `,
  styles: [`
    .member-badge { 
      display: inline-flex; 
      align-items: center; 
      background: #e9ecef; 
      padding: 5px 12px; 
      border-radius: 20px; 
      margin: 5px;
      font-size: 0.9rem;
      border: 1px solid #dee2e6;
    }
    button { 
      background: none; border: none; color: #ff4d4d; 
      cursor: pointer; font-weight: bold; margin-left: 8px;
      font-size: 1.2rem; line-height: 1;
    }
    button:hover { color: #dc3545; }
  `]
})
export class MemberCardComponent {
  @Input({ required: true }) name!: string;
  @Output() remove = new EventEmitter<void>();
}