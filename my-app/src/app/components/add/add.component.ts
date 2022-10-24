import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  @Input()
  createTitle: string[] = [] ;

  @Input()
  createParams: string[] = [] ;

  @Input()
  entidad: string | undefined ;

  @Input()
  is_certification: boolean = false ;


  closeResult: string = '';

  dataForm: FormGroup = new FormGroup({});

  isLogged = false;


  constructor(private modalService: NgbModal,
              private http: HttpClient,
              private tokenService:TokenService) { }

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
  

    const form = Object.fromEntries(
      this.createTitle.map(param => [param, new FormControl("")])
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
    let inputs = this.dataForm.value;
    console.log("inputs :", inputs)

    // Armo la url
    let url = "http://localhost:8080/crear/" + this.entidad 
    let index = 0;


    let bodyParams: any = {}
    for (let param of Object.values(inputs)) {
      bodyParams[this.createParams[index]] = param;
      index ++
    }

    if(this.entidad == "education"){
      bodyParams["certificacion"] = this.is_certification
    }

    console.log("bodyParams ", bodyParams)
    // Le pego a la URL
    this.http.post(url,bodyParams).subscribe((async (x)=> console.log(x)));

  }

}
