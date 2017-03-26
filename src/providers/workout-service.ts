import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {

  apiKey: string;
  workoutsUrl: string;

  constructor(public http: Http) {
    this.http = http;
    this.apiKey = 'suRJrwcpnVizZzw2yf9w6U9dwmkX6-Ae';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/workoutsappdb/collections/workouts';
  }

  getWorkouts() {
    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
      .map(res => res.json());
  }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }

}
