import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="colored">
      <h3>FORM</h3>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div style="display: flex;">
          <label>Name: </label>
          <input formControlName="name" type="text" class="colored">
        </div>
        <div style="display: flex;">
          <label>Age:</label>
          <input formControlName="age" type="number">
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  `,
  styles: `
    label {width: 80px}
    .colored {
      background-color: burlywood;
    }
  `

})
export class FormComponent {
  @Output()
  formData= new EventEmitter<any>();

  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  onSubmit = () => {
    console.log(this.form.value)
    this.formData.emit(this.form.value)
    this.form.reset()
  }
}
