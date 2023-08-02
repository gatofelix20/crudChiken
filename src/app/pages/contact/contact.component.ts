import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderDetailsService } from '../../services/order-details.service';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  forma: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private tarjetaSvc: OrderDetailsService) {

     this.forma = this.fb.group({

       usuario: ['', Validators.required],
       email: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(25)]],
       mobil: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(18)]]

     })

  }

  ngOnInit(): void {}

    //usuario

  get usuario() {
    return this.forma.get('usuario')?.dirty && this.forma.get('usuario')?.touched && this.forma.get('usuario')?.valid
  }

  get usuarioNoValido() {
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched
  }

 

   //Email

   get email() {
    return this.forma.get('email')?.dirty && this.forma.get('email')?.touched && this.forma.get('usuario')?.valid
  }

  get emailNoValido() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }

   //Mobil
   
   get mobil() {
    return this.forma.get('mobil')?.dirty && this.forma.get('mobil')?.touched && this.forma.get('mobil')?.valid
  }

  get mobilNoValido() {
    return this.forma.get('mobil')?.invalid && this.forma.get('mobil')?.touched
  }

  

  guardarTarjeta() {
    
   //Objeto

   const tarjeta : TarjetaCredito = {

      usuario: this.forma.value.usuario,
      email: this.forma.value.email,
      mobil: this.forma.value.mobil,
   }

   this.loading = true;

   this.tarjetaSvc.guardarTarjeta(tarjeta).then(() =>{

      this.loading = false;
      this.forma.reset();

   })

    
  }

}
