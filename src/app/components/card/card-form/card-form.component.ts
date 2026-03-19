import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent implements OnInit {
  @Input() card: any = null;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  form!: FormGroup;
  readonly maxTitle = 120;
  readonly maxDescription = 5000;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.card?.title || '', [Validators.required, Validators.maxLength(this.maxTitle)]],
      description: [this.card?.description || '', [Validators.maxLength(this.maxDescription)]]
    });
    if (!this.card?.createdAt) {
      this.card = { ...this.card, createdAt: new Date().toISOString().split('T')[0] };
    }
  }

  get isEditMode(): boolean {
    return !!this.card?.id;
  }

  submit(): void {
    if (this.form.valid) {
      this.onSave.emit({ ...this.card, ...this.form.value });
    }
  }
}
