import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutService } from '../../providers/workout-service';

/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  title = '';
  note;
  type;
  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutService) {
    this.navCtrl = navCtrl;
    this.workoutService = workoutService;
    this.title;
    this.note;
    this.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit() {
    let workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data
    },
    err => console.log(err),
    () => location.reload());

  }

}
