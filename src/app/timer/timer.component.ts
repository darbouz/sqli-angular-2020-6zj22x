import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"]
})
export class TimerComponent implements OnInit {
  timer: number = 0;
  constructor() {
    // setInterval(() => {
    //   this.timer++;
    // }, 1000)
  }

  ngOnInit() {}
}
