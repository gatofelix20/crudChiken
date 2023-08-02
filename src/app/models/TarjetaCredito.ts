export class TarjetaCredito {
    id? : string;
    usuario: string;
    email: string;
    mobil: string;

    constructor(usuario: string,email: string, mobil: string ) {

        this.usuario = usuario;
        this.email = email;
        this.mobil = mobil;


    }

}