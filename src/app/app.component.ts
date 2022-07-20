import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ltasks';
  showFiller = false;
  panelOpenState = false;

  displayChatMobile:string = "none";
  opened:boolean = true;

  changeOpenedSidebar(){
    if(this.opened == true){
      this.opened = false;
    }else{
      this.opened = true;
    }

  }

  openChat(){
    this.displayChatMobile = "flex";
  }
  closeChat() {
    this.displayChatMobile = "none";
  }

}
