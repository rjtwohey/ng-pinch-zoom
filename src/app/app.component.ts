import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfViewerModule, PinchZoomModule], // Add PinchZoomModule to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pinch-zoom';
  pdfData: string;
  zoom: number;
  myPadding: number;

  constructor() {
    this.pdfData = "";
    this.zoom = 1.0;
    this.myPadding = 0.5;
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfData = e.target.result;
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}