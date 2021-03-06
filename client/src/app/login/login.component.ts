import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(this.loginForm.get('username').value).subscribe(() => {
      this.router.navigateByUrl('/chat')
        .catch(error => {
          console.log(error);
        });
    }, error => {
      this.errorMessage = error.error.message;
    });
  }

}
