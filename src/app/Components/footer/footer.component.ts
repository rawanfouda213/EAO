import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // questions: Question[] = [
  //   { title: 'كيف يمكنني الحصول على الدعم الفني لاسم المنتج؟', answer: 'الجواب هنا...', open: false },
  //   { title: 'ما هي الإسعافات الأولية؟', answer: 'الجواب هنا...', open: false },
  //   { title: 'من هو المسعف الأولي؟', answer: 'الجواب هنا...', open: false },
  //   { title: 'كيف يمكنني الإتصال بالإسعاف في حالة الحالات الطارئة؟', answer: 'الجواب هنا...', open: false },
  //   { title: 'هل خدمة الإسعافات الأولية لها رسوم؟', answer: 'الجواب هنا...', open: false },
  //   { title: 'هل يوجد خدمة مطابقة فنية لترخيص سيارات الإسعاف؟', answer: 'الجواب هنا...', open: false }
  // ];

  // toggleAnswer(question: Question) {
  //   question.open = !question.open;
  // }
  // }
  

  // export interface Question {
  //   title: string;
  //   answer: string;
  //   open: boolean;
  // }
}