import {Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import { faker } from '@faker-js/faker';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  selectedFaq = signal<number>(1);
  selectedContent = computed(() => this.faqs.find(faq => faq.id === this.selectedFaq()));

  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Comment créer un compte ?',
      answer: faker.lorem.paragraph(30)
    },
    {
      id: 2,
      question: 'Comment réinitialiser mon mot de passe ?',
      answer: faker.lorem.paragraph(30)
    },
    {
      id: 3,
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: faker.lorem.paragraph(30)
    },
    {
      id: 4,
      question: 'Comment contacter le support ?',
      answer: faker.lorem.paragraph(30)
    },
    {
      id: 5,
      question: 'Puis-je annuler mon abonnement ?',
      answer: faker.lorem.paragraph(30)
    }
  ];

  selectFaq(id: number) {
    this.selectedFaq.set(id);
  }
}

