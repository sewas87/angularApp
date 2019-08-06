import {ConsLogService} from './cons-log.service';
import {Injectable} from '@angular/core';

@Injectable()

export class DataService {
  private  data: string[] = ['aple', 'samsung', 'motorola'];
  constructor(
   private consLogService: ConsLogService,
  ) { }

  getData() {
    this.consLogService.write('get data');
    return this.data;
  }

  setData(el: string) {
    this.data.push(el);
    this.consLogService.write('set data');

  }

}
