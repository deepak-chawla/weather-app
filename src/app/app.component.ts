import { Component, OnInit } from '@angular/core'
import { WeatherData } from './models/weather.model'
import { WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dee-weather-app'
  weatherData?: WeatherData
  cityName: string = 'karachi'

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe(
      (response) => {
        this.weatherData = response
      },
      (error) => {
        console.error(error.message)
      }
    )
  }

  onSubmit() {
    console.log(this.cityName)
    this.getWeatherData(this.cityName)
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe(
      (response) => {
        this.weatherData = response
      },
      (error) => {
        console.error(error.message)
      }
    )
  }
}
