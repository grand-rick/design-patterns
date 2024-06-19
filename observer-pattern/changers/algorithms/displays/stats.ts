import { DisplayElement, Observer, Subject } from "../../interfaces";

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

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.temperatureSum += temperature;
    this.numReadings++;

    if (temperature > this.maxTemperature) {
      this.maxTemperature = temperature;
    }

    if (temperature < this.minTemperature) {
      this.minTemperature = temperature;
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
