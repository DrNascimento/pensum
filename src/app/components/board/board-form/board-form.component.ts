import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-board-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './board-form.component.html',
  styleUrl: './board-form.component.css'
})
export class BoardFormComponent implements OnInit {
  @Input() name: string = '';
  @Output() onSave = new EventEmitter<{ name: string }>();
  @Output() onCancel = new EventEmitter<void>();

  form!: FormGroup;
  readonly maxName = 60;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.name, [Validators.required, Validators.maxLength(this.maxName)]]
    });
  }

  get isEditMode(): boolean {
    return this.name.length > 0;
  }

  submit(): void {
    if (this.form.valid) {
      this.onSave.emit(this.form.value);
    }
  }
}
