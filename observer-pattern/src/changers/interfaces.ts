export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObserver(): void;
}

export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

export interface DisplayElement {
  display(): void;
}
