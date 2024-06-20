import { DisplayElement, Subject } from "../interfaces";

export class HeatIndexDisplay implements DisplayElement {
  private heatIndex: number = 0.0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display(): void {
    console.log(`Heat index is ${this.heatIndex}`);
  }

  update(): void {
    const temp = this.weatherData.getTemperature();
    const humidity = this.weatherData.getHumidity();
    this.heatIndex = this.computeHeatIndex(temp, humidity);
    this.display();
  }

  private computeHeatIndex(T: number, RH: number): number {
    return (
      16.923 +
      0.185212 * T +
      5.37941 * RH -
      0.100254 * T * RH +
      0.00941695 * T * T +
      0.00728898 * RH * RH +
      0.000345372 * T * T * RH -
      0.000814971 * T * RH * RH +
      0.0000102102 * T * T * RH * RH -
      0.000038646 * T * T * T +
      0.0000291583 * RH * RH * RH +
      0.00000142721 * T * T * T * RH +
      0.000000197483 * T * RH * RH * RH -
      0.0000000218429 * T * T * T * RH * RH +
      0.000000843296 * T * T * RH * RH * RH -
      0.000000000481975 * T * T * T * RH * RH * RH
    );
  }
}
