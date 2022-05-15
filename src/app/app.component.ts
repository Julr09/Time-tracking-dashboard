import { Component, OnInit } from '@angular/core'
import { ICard } from './models/card.model'
import data from '../data/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time!: string
  selected!: number
  data!: ICard[]
  icons: string[] = [
    'url(./assets/images/icon-work.svg)',
    'url(./assets/images/icon-play.svg)',
    'url(./assets/images/icon-study.svg)',
    'url(./assets/images/icon-exercise.svg)',
    'url(./assets/images/icon-social.svg)',
    'url(./assets/images/icon-self-care.svg)'
  ]
  colors: string[] = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
  ]

  getData(arr: any[], time: string) {
    return arr.map(elem => (
      {
        title: elem.title,
        current: elem.timeframes[time].current,
        previous: elem.timeframes[time].previous
      }
    ))
  }

  onDaily() {
    this.selected = 1
    this.data = this.getData(data, 'daily')
    this.time = 'Day'

  }

  onWeekly() {
    this.selected = 2
    this.data = this.getData(data, 'weekly')
    this.time = 'Week'
  }

  onMonthly() {
    this.selected = 3
    this.data = this.getData(data, 'monthly')
    this.time = 'Month'
  }

  ngOnInit() {
    this.onWeekly()
  }
}
