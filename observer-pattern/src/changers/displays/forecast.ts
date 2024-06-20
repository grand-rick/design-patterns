import { DisplayElement, Observer, Subject } from "../interfaces";

export class ForeCastDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.pressure = this.weatherData.getPressure();
    this.display();
  }

  display(): void {
    console.log(
      `Forecast: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}
