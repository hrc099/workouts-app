import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout-service';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

/*
  Generated class for the Workouts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {

  workouts;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutService) {
    this.workoutService = workoutService;
    this.workouts;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

}
