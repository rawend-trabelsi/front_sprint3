import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Typesmartphone } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styles: ``
})
export class UpdateTypeComponent  implements OnInit{
  @Input() 
  type! : Typesmartphone;
  @Output()
typeUpdated = new EventEmitter<Typesmartphone>();
@Input()
ajout!:boolean;

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ",this.type);
    }
    saveType(){
      this.typeUpdated.emit(this.type);

    }
}
