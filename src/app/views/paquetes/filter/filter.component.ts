import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filtroForm!: UntypedFormGroup;
  totalPasajeros: number = 0

  submitForm(): void {
    console.log('submit', this.filtroForm.value);
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      destino: new FormControl(null),
      fecha: new FormControl(null),
      cantAdultos: new FormControl(0),
      cantNinios: new FormControl(0),
      cantTotal: new FormControl(0),
      remember: [true]
    });

  }

  onChangeCantPasajeros(){
    console.log('desde cambio')
    let number1 = this.filtroForm.get('cantAdultos')?.value;
    let number2 = this.filtroForm.get('cantNinios')?.value;
    this.filtroForm.patchValue({cantTotal: number1 + number2});
  }

}
