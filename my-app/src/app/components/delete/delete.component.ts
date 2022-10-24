import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()
  entidad: string | undefined ;

  @Input()
  id_entidad: Number | undefined ;

  isLogged = false;

  closeResult: string = '';
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, 
              private http: HttpClient,
              private tokenService:TokenService) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  deleteData() {

    let url = "http://localhost:8080/borrar/" + this.entidad + "/" + this.id_entidad
    
    const URL = `${url}/${this.id_entidad}`;

    this.http.delete(url,{}).subscribe((async (x)=> console.log(x)));
  }

}
