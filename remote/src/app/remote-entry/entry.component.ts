import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '@federation/form';

@Component({
  standalone: true,
  imports: [CommonModule, FormComponent],
  selector: 'app-remote-entry',
  template: `
    <lib-form (formData)="onFormData($event)"/>
  `,
})
export class RemoteEntryComponent {
  @Output() data: EventEmitter<any> = new EventEmitter<any>()

  onFormData(event: any) {
    console.log('EMITTED')
    this.data.emit(event)
  }
}
