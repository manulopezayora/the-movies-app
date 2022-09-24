import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }]
})
export class InputComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() inputType: string | undefined;

  constructor() {
    this.inputType = this.inputType || 'text';
  }

  ngOnInit(): void {
  }

}
