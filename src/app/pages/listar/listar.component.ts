import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  listarTarjetas: TarjetaCredito[]=[];

  constructor(private tarjetaSvc: OrderDetailsService) {}

  ngOnInit(): void {

      this.obtenerTarjeta();

  }


  obtenerTarjeta() {

      this.tarjetaSvc.obtenerTarjeta().subscribe(res =>{

        this.listarTarjetas = [];

        res.forEach((element: any)=>{

         this.listarTarjetas.push({
            
          id: element.payload.doc.id,
          ...element.payload.doc.data()

         })

        })
        

      })

  }

}
