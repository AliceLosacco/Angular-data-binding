import { Component, OnInit, Input, EventEmitter, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: true }) campoValorInput: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value });
  };

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    //this.valor--;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value });
  };

  constructor() {  
  }

  ngOnInit(): void {
  }

}
