import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  editTitle: string[] = [] ;

  @Input()
  editParams: string[] = [] ;

  @Input()
  entidad: string | undefined ;

  @Input()
  id_entidad: Number | undefined ;

  closeResult: string = '';

  dataForm: FormGroup = new FormGroup({});

  isLogged = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal,
             private http: HttpClient,
             private tokenService: TokenService) {
    console.log('EditComponent');
  }

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
    /* console.log(this.editTitle); */

    const form = Object.fromEntries(
      this.editTitle.map(param => [param, new FormControl("")])
    )

    this.dataForm = new FormGroup(form);

    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  saveData() {
    // Obtengo los inputs
    let inputs: {string: string} = this.dataForm.value;
    console.log("inputs :", inputs)

    // Armo la url
    let url = "http://localhost:8080/editar/" + this.entidad + "/" + this.id_entidad
    let index = 0;


    let options = {
      params: new HttpParams()
    }

    for (let param of Object.values(inputs)) {

      if (param != "id") {
        options.params = options.params.set(this.editParams[index], param);
        console.log(this.editParams[index], " ", param)
      }
      index ++
    }
    
    console.log("options :", options.params.toString())

    // Le pego a la URL
    this.http.put(url, {headers:{Authorization: "aslñdkalksjñlasjdñlkasjldkñASH"}}, options).subscribe((async (x)=> console.log(x)));

  }

}
