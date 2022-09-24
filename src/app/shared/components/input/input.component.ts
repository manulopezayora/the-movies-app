import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() inputType: string | undefined;

  public inputValue: string;
  public value: string;
  public isDisabled: boolean;

  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() {
    this.inputValue = '';
    this.value = '';
    this.isDisabled = false;
    this.inputType = this.inputType || 'text';
  }

  ngOnInit(): void {
  }

  public onInput(event: any): void {
    this.inputValue = event.target.value;
    this.value = this.inputValue;
    this.onTouch();
    this.onChange(this.value);
  }

  public writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
