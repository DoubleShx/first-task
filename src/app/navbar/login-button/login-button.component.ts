import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../admin/auth.service';
import {Router} from '@angular/router';
import {User} from '../../shared/shared';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {

}
//   form: FormGroup;
//   submitted = false;
//   public message: any;
//
//   constructor(config: NgbModalConfig, private modalService: NgbModal, public auth: AuthService, public router: Router) {
//     config.backdrop = 'static';
//     config.keyboard = false;
//   }
//
//
//   modalWindow(content) {
//     this.modalService.open(content);
//   }
//
//
//   ngOnInit(): void {
//     this.form = new FormGroup({
//       email: new FormControl(null, [
//         Validators.required,
//         Validators.email
//       ]),
//       password: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(6)
//       ])
//     });
//   }
//
//   submit(): any {
//     if (this.form.invalid) {
//       return;
//     }
//     this.submitted = true;
//     const user = {
//       email: this.form.value.email,
//       password: this.form.value.password
//     };
//     console.log(user);
//     this.auth.login(user).subscribe(() => {
//       this.form.reset();
//       this.router.navigate(['/admin']);
//       this.submitted = false;
//       this.message = false;
//     }, () => {
//       this.submitted = false;
//       this.message = false;
//     });
//   }
// }
