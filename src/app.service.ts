import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  /**
   * @description 머신러닝 Test
   */
  executeFile(): string {
    return "";
  }
  uploadFile(): void {
    
  }
}
