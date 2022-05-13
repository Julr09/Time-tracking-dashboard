import { Component, OnInit } from '@angular/core'
import ICardModel from '../models/card.model'
import data from '../data/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  work!: ICardModel
  play!: ICardModel
  study!: ICardModel
  exercise!: ICardModel
  social!: ICardModel
  selfCare!: ICardModel
  time!: string
  selected!: number

  getData(arr: any[], time: string) {
    return arr.map(elem => (
      {
        current: elem.timeframes[time].current,
        previous: elem.timeframes[time].previous
      }
    ))
  }

  onDaily() {
    this.selected = 1
    const daily = this.getData(data, 'daily')
    this.time = 'Day'
    this.work = daily[0]
    this.play = daily[1]
    this.study = daily[2]
    this.exercise = daily[3]
    this.social = daily[4]
    this.selfCare = daily[5]
  }

  onWeekly() {
    this.selected = 2
    const weekly = this.getData(data, 'weekly')
    this.time = 'Week'
    this.work = weekly[0]
    this.play = weekly[1]
    this.study = weekly[2]
    this.exercise = weekly[3]
    this.social = weekly[4]
    this.selfCare = weekly[5]
  }

  onMonthly() {
    this.selected = 3
    const monthly = this.getData(data, 'monthly')
    this.time = 'Month'
    this.work = monthly[0]
    this.play = monthly[1]
    this.study = monthly[2]
    this.exercise = monthly[3]
    this.social = monthly[4]
    this.selfCare = monthly[5]
  }

  ngOnInit() {
    this.onWeekly()
  }

}
