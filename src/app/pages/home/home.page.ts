import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  segmentValue = '1';
  informaciones: any[] = [];
  detalles: any[] = [];
  lineChart: any;
  newHeight: 0;

  constructor(public actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    console.log('ngOnInit');
   this.detalles = [
     { id: 1,
     name: 'Noriko Diaz',
     age: 25,
     address: 'Concepcion',
      gender: 'Femenino',
      group: 'B-',
      photo: 'assets/imgs/4.png',
       distance: 0.5,
        phone: '9999900000',
         email: 'abc@xyz.com' },
     { id: 2,
        name: 'Carlos Diaz',
        age: 22,
         address: 'Asuncion',
          gender: 'Masculino',
           group: 'A+',
            photo: 'assets/imgs/2.png',
             distance: 2,
              phone: '9999900001',
               email: 'abc1@xyz.com' },
     { id: 3,
        name: 'Lalo Diaz',
         age: 27,
          address: 'Boqueron',
          gender: 'Femenino',
           group: 'O-',
            photo: 'assets/imgs/3.png',
             distance: 6,
              phone: '9999900002',
             email: 'abc2@xyz.com' },
     { id: 4,
        name: 'Bali Diaz',
         age: 35,
          address: 'San Pedro',
           gender: 'Masculino',
            group: 'AB-',
             photo: 'assets/imgs/1.png',
              distance: 10,
               phone: '9999900003',
                email: 'abc3@xyz.com' },
     { id: 5,
        name: 'Goku Diaz',
         age: 30,
          address: 'Cuidad del Este',
            gender: 'Masculino',
            group: 'O+',
             photo: 'assets/imgs/2.png',
             distance: 12,
              phone: '9999900004',
               email: 'abc4@xyz.com' },
     { id: 6,
        name: 'Onorio Diaz',
         age: 45,
          address: 'Oviedo',
          gender: 'Masculino',
           group: 'O-',
           photo: 'assets/imgs/2.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
     { id: 7,
        name: 'Dilma Diaz',
         age: 20,
          address: 'Pedro Juan Caballero',
          gender: 'Femenino',
           group: 'A-',
            photo: 'assets/imgs/3.png',
             distance: 16.7,
             phone: '9999900006',
             email: 'abc6@xyz.com' }
   ];

   this.informaciones = [
     { id: 1,
        name: 'Jesica Diaz',
         age: 20,
          address: 'Barrio Obrero',
           gender: 'Femenino',
            group: 'B+',
             photo: 'assets/imgs/3.png',
              distance: 1
              , phone: '9999900010',
               email: 'xyz1@xyz.com' },
     { id: 2,
        name: 'Cristian Diaz',
         age: 29,
          address: 'Barrio San Blas',
           gender: 'Masculino',
            group: 'O+',
             photo: 'assets/imgs/2.png',
              distance: 1.5,
               phone: '9999900020',
                email: 'xyz2@xyz.com' },
     { id: 3,
        name: 'Dario Diaz',
         age: 45,
          address: 'Barrio Reyes Catolico',
           gender: 'Masculino',
            group: 'AB+',
             photo: 'assets/imgs/4.png',
              distance: 3,
              phone: '9999900030',
               email: 'xyz3@xyz.com' },
     { id: 4,
        name: 'Fabio Diaz',
         age: 23,
          address: 'Cerca de tu Corazon',
           gender: 'Masculino',
            group: 'O+',
             photo: 'assets/imgs/1.png',
              distance: 8,
               phone: '9999900040',
                email: 'xyz4@xyz.com' },
     { id: 5,
        name: 'Manco Diaz',
         age: 35,
          address: 'Barrio Obrero',
           gender: 'Masculino',
            group: 'O-',
             photo: 'assets/imgs/2.png',
              distance: 15,
               phone: '9999900050',
                email: 'xyz5@xyz.com' },
     { id: 6,
        name: 'Liz Diaz',
         age: 20,
          address: 'Beijing, China',
           gender: 'Femenino',
           group: 'B-',
            photo: 'assets/imgs/3.png',
             distance: 20,
              phone: '9999900060',
               email: 'xyz6@xyz.com' }
   ];
 }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.lineChartMethod();
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec', 'Mar\'21', 'Jun\'21'],
        datasets: [
          {
            label: 'COVID velovidad',
            fill: 'false',
            backgroundColor: '#fff',
            borderColor: '#E31007',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#fff',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#E31007',
            pointHoverBorderColor: '#E31007',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 10, 25, 30, 25, 15, 10, 20, 18, 5, 2, 15, 15, 35],
            spanGaps: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false
            }
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }
  scroll(event){
    const value = event.detail.scrolltop;
      console.log(value, this.newHeight);
    if(value > 40){
      this.newHeight +=5; //this.newHeight = this.newHeight + 5
    }else{
      this.newHeight=0;
    }
    if(value > 100 && this.newHeight <= 65){
      this.newHeight +=50;
    }
  }

  async options(item){
    console.log(item);
    const actionSheet = await this.actionSheetCtrl.create({
      header:'informaciones',
      cssClass:'my-custom-class',
      buttons:[
        {
          text:'telefono',
          icon:'call',
          handler:() => {
            console.log('call cliked');
          }
        },
        {
          text:'Correo',
          icon:'mail',
          handler:() => {
            console.log('mail cliked');
          }
        },
        {
          text:'Ubicacion',
          icon:'locate',
          handler:() => {
            console.log('locate cliked');
          }
        },
        {
          text:'Cancelar',
          icon:'close',
          role:'cancel',
          handler:() => {
            console.log('Cancel cliked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
