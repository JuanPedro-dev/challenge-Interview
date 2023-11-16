import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/interfaces/MyErrorStateMatcher';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  options: string[] = ['DNI', 'Pasaporte', 'Libreta', 'Otro']
  hide:boolean = true;
  minLength: number = 4;

  formLogin!: FormGroup;
  docTypeFormControl = new FormControl('', Validators.required);
  dniFormControl = new FormControl('', Validators.required);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minLength),
  ]);
  
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      docType: this.docTypeFormControl,
      dni: this.dniFormControl,
      password: this.passwordFormControl,
    });
  }

  onSubmit(): void {
    console.log(this.formLogin.value);
    // TODO: validar con los services y generar token, etc
    this.router.navigate(['/dashboard']);
    this.launchError();
  }

  launchError(): void {
    this._snackBar.open('Bienvenido!', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }

  abrirTeclado(): void{
    // TODO: agregar teclado virtual, etc.
    alert("TODO: abrir teclado")
  }
}