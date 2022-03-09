import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public listMeats = ["Cambiar de cuenta...", "Pasar a modo desconectado...", "Comprobar si existen actualizacion del cliente de steam...", "Hacer copia de serguradad y restaurar prpgramas...", "Parámetros", "Salir"];
  public listVer = ["Blblioteca", "Juegos ocultos", "Descargas", "Modo reducido", "Modo Big Picture", "Reproductor de música", "Amigos", "Jugadores", "Servidores", "Capturas", "Inventario", "Noticias de actualizaciones", "Parámetros"];
  public listFriends = ["Ver lista de amigos", "Añadir a un amigo...", "Cambiar nombre de perfil / avatar...", "Conectado", "Ausente", "Invisible", "Desconectado"];
  public listProducts = ["Ver biblioteca de productos", "Activar un producto en Meats...", "Canjear un código de la Cartera de Meats", "Gestionar regalos y pases de invitado...", "Añadir un producto que no es de Meats a mi biblioteca..."];
  public listHelp = ["Soporte de Meats", "Política de Privacidad", "Información legal", "Acuerdo de Suscriptor a Meats", "Información del sistema", "Acerca de Meats"];
  public active = "";
  public clicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:click", ["$event"])
  handler_name($event:any){
    if($event.path[0].className != 'option' && this.clicked == true && this.active != '') this.clicked = false;
  }
  
  hola(){
    console.log("hola")
  }

}
