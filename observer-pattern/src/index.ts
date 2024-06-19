import { CurrentConditionsDisplay } from "../changers/algorithms/displays/current_conditions";
import { ForeCastDisplay } from "../changers/algorithms/displays/forecast";
import { StatsDisplay } from "../changers/algorithms/displays/stats";
import { WeatherData } from "../super-class/weather_data";

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const statsDisplay = new StatsDisplay(weatherData);
const forecastDisplay = new ForeCastDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
// Output:
// Current conditions: 80F degrees and 65% humidity
// Avg/Max/Min temperature = 80/80/80
// Forecast: 80F degrees and 65% humidity
// Current conditions: 82F degrees and 70% humidity
// Avg/Max/Min temperature = 81/82/80
// Forecast: 82F degrees and 70% humidity
// Current conditions: 78F degrees and 90% humidity
