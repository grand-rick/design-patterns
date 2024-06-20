export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObserver(): void;
  getTemperature(): number;
  getHumidity(): number;
  getPressure(): number;
}

export interface Observer {
  update(): void;
}

export interface DisplayElement {
  display(): void;
}
