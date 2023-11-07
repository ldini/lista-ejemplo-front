import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"bjndfroukomhvmbd577r-mysql.services.clever-cloud.com",
      "port":3306,
      "username":"u2v644nssfmewmsa",
      "password":"nz20jS2ZkopJmid9oBua",
      "database":"bjndfroukomhvmbd577r",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize":true

    }),
    
    ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
