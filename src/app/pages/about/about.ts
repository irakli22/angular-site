import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../../components/member-card/member-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './about.html', // Moving HTML to its own file for "proper" structure
  styleUrl: './about.css'  // Moving CSS to its own file
})
export class AboutComponent {
  // Signals for reactive state
  status = signal('Planning Phase');
  team = signal(['Alice Swift', 'Bob Coder']);
  lastUpdated = signal<Date | null>(null);

  // Computed values: automatic recalculation
  teamCount = computed(() => this.team().length);
  isReady = computed(() => this.status() === 'Deployment Ready 🚀');

  addMember() {
    const newNames = ['Charlie Tech', 'Dana Dev', 'Eli Ops', 'Finn UX'];
    const randomName = newNames[Math.floor(Math.random() * newNames.length)];
    
    this.team.update(prev => [...prev, randomName]);
    this.lastUpdated.set(new Date());
  }

  removeMember(index: number) {
    this.team.update(prev => prev.filter((_, i) => i !== index));
    this.lastUpdated.set(new Date());
  }

  finalize() {
    this.status.set('Deployment Ready 🚀');
    this.lastUpdated.set(new Date());
  }
}