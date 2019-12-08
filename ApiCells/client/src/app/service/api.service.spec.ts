import { cellInterface } from './../interface/cell-interface';
import { AppComponent } from './../app.component';
import { ApiService } from './api.service';
import { UserService } from '../service/user.service';
import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('ApiService', () => {

  
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let CellInter: cellInterface={
    id: null,
    name:"",
    manufacturerCompany:"",
    screen:"",
    processor:"",
    ram:"",
    storage:"",
    os:"",
    cameraCharacteristics:"",
    quantityCamera:"",
    battery:"",
    weight:"",
    price:"",
    color:"",
    sound:"",
    image:"",
    hide:"1"
  }
  let dummyCells = [
    {
      "id": "5de6d7ad448a2a6ea8ce9016",
      "name": "Samsung S10",
      "manufacturerCompany": "Samsung",
      "screen": "Amoled HD+ de 6 pulgadas",
      "os": "Android",
      "ram": "6GB",
      "storage": "128GB",
      "processor": "Exynos octacore",
      "cameraCharacteristics": "4K 60. FPS y Full HD 80 FPS con cámara lenta",
      "quantityCamera": "4",
      "battery": "3400 mAh",
      "weight": "3kg",
      "price": "3,299,900 COP",
      "sound": "Parlante estereo",
      "image": "https://http2.mlstatic.com/celular-samsung-galaxy-s10-e-blanco-128gb-duos-obsequio-iman-D_NQ_NP_834097-MCO31570795285_072019-F.webp",
      "hide": "0",
      "cellId": "5de6d7ad448a2a6ea8ce9016"
    }];


  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  it('El metodo get devuelve un observable <celular[]>', () => {
    const service: ApiService = TestBed.get(ApiService);

    service.getAllCells().subscribe(cells => {
      expect(cells).toEqual(dummyCells);
    });

    const req = httpMock.expectOne(
      'http://localhost:3000/api/cellphones?filter[where][hide]=0'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyCells);
  });

  it('El metodo post devuelve una interfaz de tipo <celular[]>', () => {

    const service: ApiService = TestBed.get(ApiService);

    service.newCellphone(CellInter).subscribe(cells => {
        expect(cells).toEqual(CellInter);
    });

  });

  it('El metodo update devuelve una interfaz de tipo <celular[]>', () => {

    const service: ApiService = TestBed.get(ApiService);

    service.updateCellphone(CellInter).subscribe(cells => {
        expect(cells).toEqual(CellInter);
    });

  });

  it('El metodo delete devuelve una interfaz de tipo <celular[]>', () => {

    const service: ApiService = TestBed.get(ApiService);

    service.deleteCellphone(CellInter).subscribe(cells => {
        expect(cells).toEqual(CellInter);
    });

  });

});