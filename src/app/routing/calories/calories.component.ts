import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/servise/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {log} from "util";

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  ngOnInit() {
  }

}
