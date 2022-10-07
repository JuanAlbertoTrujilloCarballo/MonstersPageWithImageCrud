import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  endPoint = "http://localhost:8080/api/monsters";

  constructor(private httpClient: HttpClient) { }

  getMonsters(){
    return this.httpClient.get(this.endPoint);
  }

  // DECOMMENT:
  createMonster(monster, blob){
    let formData = new FormData();
    formData.append("name", monster.name);
    formData.append("title", monster.title);
    formData.append("weakness", monster.weakness);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }
}
