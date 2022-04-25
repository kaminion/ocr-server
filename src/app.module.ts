import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MulterModule.register({
    // 파일 저장 이름 때문에 수정
    storage: diskStorage({
      // 기존 dest 옵션으로 대체 가능함
      destination: (req, file, cb) => {
        cb(null, './upload')
      },
      // 파일 이름의 경우 난수나 해시로 저장되는 문제가 있어 커스텀하게 정의
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
