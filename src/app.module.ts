import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"motorola",
      "database":"lista-prueba",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize":false

    }),
    
    ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
