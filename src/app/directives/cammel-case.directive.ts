import { Directive, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appCammelCase]',
 
})
export class CammelCaseDirective implements OnChanges {
  
  @Input() cammelCaseData :string
  @Output() outCammelCaseData  = new EventEmitter<any>();
  
  constructor() {}

  extractCammelCaseData(){
        
    var data = this.cammelCaseData.split(' ');
    
    data.forEach(element => {
      data[data.indexOf(element)] = element[0].toUpperCase() + element.slice(1).toLowerCase();
    });
    // const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    // var data = capitalize([this.cammelCaseData]);
    this.outCammelCaseData.emit(data);
  }

  ngOnChanges() {
    console.log('Debugger (onChange):' + this.cammelCaseData); // logs undefined
    
    this.extractCammelCaseData();
    
}


}
