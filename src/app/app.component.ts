import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {
      displayDefaultIndicatorType: false
    }
  }]
})
export class AppComponent implements OnInit {
  completed: boolean = false;
  state: any;
  firstFormGroup = this._formBuilder.group({
    FullNametCtrl: ['', Validators.required],
    DisplayNameCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    WorkspaceNameCtrl: ['', Validators.required],
    WorkspaceURLCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    selectedOptionCtrl: ['', Validators.required],

  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {

  }
  done() {
    this.completed = true;
    this.state = 'done';
  }
}
