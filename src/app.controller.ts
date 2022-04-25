import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { execSync, spawn, spawnSync } from 'child_process';
import { AppService } from './app.service';
import fs, { rmSync } from 'fs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  // TODO: 추후 파일 확장자 검증 로직 필요 (일단 테스트라 상관없음)
  /**
   * @description 해당 파일은 multipart/form-data 형식의 POST 요청만 receive하게 되어있음
   * @param file name을 file로 받게 되어있음
   * 정확한 요청을 준다면 문제없이 업로드하게 되어있음
   */
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File)
  {
    /**
     * 서버 기본 로직
     * 1. 파일 업로드
     * 2. 업로드 된 파일 Test에 넘겨줌
     * 3. Test 결과 돌려줌 
    **/
    // 결과 리턴

    const result = spawnSync('sh', ['./app.sh']).stdout.toString();
    console.log(result);
    // console.log("업로드 된 파일", file);
    // rmSync(file.path)
    return result;
  }
}
