import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout-service';

/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

  workout;
  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.workoutService = workoutService;
    this.workout = this.navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
  }

  deleteWorkout(workoutId) {
    this.workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result = data
    },
    err => console.log(err),
    () => location.reload());
  }

}
