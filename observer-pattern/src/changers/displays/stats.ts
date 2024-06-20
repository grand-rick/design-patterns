import { DisplayElement, Observer, Subject } from "../interfaces";

export class StatsDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private maxTemperature: number = 0;
  private minTemperature: number = 200;
  private temperatureSum: number = 0;
  private numReadings: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.pressure = this.weatherData.getPressure();
    this.temperatureSum += this.temperature;
    this.numReadings++;

    if (this.temperature > this.maxTemperature) {
      this.maxTemperature = this.temperature;
    }

    if (this.temperature < this.minTemperature) {
      this.minTemperature = this.temperature;
    }

    this.display();
  }

  display(): void {
    console.log(
      `Avg/Max/Min temperature = ${this.temperatureSum / this.numReadings}/${
        this.maxTemperature
      }/${this.minTemperature}`
    );
  }
}
