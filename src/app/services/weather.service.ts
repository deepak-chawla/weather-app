import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private headers = new HttpHeaders()
    .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
    .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue);

  private params = new HttpParams();

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl,
      {
        headers: this.headers,
        params: this.params.set('city', cityName),
      }
    );
  }
}
