import { Component, OnInit, HostBinding,EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { MenuService } from '../../Services/menu.service';

import {Menu} from '../../Models/menu/menu';
@Component({
  selector: 'app-agregar-menu',
  templateUrl: './agregar-menu.component.html',
  styleUrls: ['./agregar-menu.component.css']
})
export class AgregarMenuComponent implements OnInit {
 menu:Menu={
 	    calorias:"",
      codigoPlatillo:0,
      descripcionPlatillo:"",
      descuento:0,
      imageurl:"http://localhost:8080/Restaurante/images/platillos",
      nombrePlatillo:"",
      precio:0,
      racion:0}
    options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  constructor(private MenuService:MenuService) { 
    this.options = { concurrency: 1, maxUploads: 3, maxFileSize: 1000000 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    
  }
  validarPalabras(event: KeyboardEvent){
    const pattern = /[A-Za-z]/;
    const inputChar = event.code;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  validarNumeros(event: KeyboardEvent){
    const pattern = /[0-9]/;
    const inputChar = event.code;
    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  add_platillo(){
 this.startUpload();
  console.log(this.menu);
this.menu.imageurl='localhost';
  	this.MenuService.guardarMenu(this.menu).subscribe(
      res=>{
        console.log(res);
        
      },
      err=>console.log(err)
    );

  }
  onUploadOutput(output: UploadOutput): void {
    switch (output.type) {
      case 'allAddedToQueue':
          // uncomment this if you want to auto upload files when added
          // const event: UploadInput = {
          //   type: 'uploadAll',
          //   url: '/upload',
          //   method: 'POST',
          //   data: { foo: 'bar' }
          // };
          // this.uploadInput.emit(event);
        break;
      case 'addedToQueue':
        if (typeof output.file !== 'undefined') {
          this.files.push(output.file);
        }
        break;
      case 'uploading':
        if (typeof output.file !== 'undefined') {
          // update current data in files array for uploading file
          const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
          this.files[index] = output.file;
        }
        break;
      case 'removed':
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
        break;
      case 'dragOver':
        this.dragOver = true;
        break;
      case 'dragOut':
      case 'drop':
        this.dragOver = false;
        break;
      case 'done':
        // The file is downloaded
        break;
    }
  }
 
  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:3000/api/Menu/Image',
      method: 'POST',
      data: { foo: 'bar' }
    };
 
    this.uploadInput.emit(event);
  }
 
  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }
 
  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }
 
  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

}
