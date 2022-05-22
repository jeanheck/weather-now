/* eslint-disable no-underscore-dangle */
interface ICity {
  name: string;
  country: string;
  temperature: number;
  humidity: number;
  pressure: number;
  updatedAt: string;
  isLowTemperature: boolean;
  isMidTemperature: boolean;
  isHighTemperature: boolean;
}

export default class City implements ICity {
  name: string;

  country: string;

  temperature: number;

  humidity: number;

  pressure: number;

  updatedAt: string;

  isLowTemperature: boolean;

  isMidTemperature: boolean;

  isHighTemperature: boolean;

  constructor(
    name: string,
    country: string,
    temperature: number,
    humidity: number,
    pressure: number,
    updatedAt: string,
  ) {
    this.name = name;
    this.country = country;
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.updatedAt = updatedAt;

    this.isLowTemperature = this.temperature <= 5;
    this.isMidTemperature = this.temperature > 5 && this.temperature <= 25;
    this.isHighTemperature = this.temperature > 25;
  }

  // public get name() : string {
  //   return this._name;
  // }

  // public set name(value: string) {
  //   this._name = value;
  // }

  // public get country() : string {
  //   return this._country;
  // }

  // public set country(value: string) {
  //   this._country = value;
  // }

  // public get temperature() : number {
  //   return this._temperature;
  // }

  // public set temperature(value: number) {
  //   this._temperature = value;
  // }

  // public get humidity() : number {
  //   return this._humidity;
  // }

  // public set humidity(value: number) {
  //   this._humidity = value;
  // }

  // public get pressure() : number {
  //   return this._pressure;
  // }

  // public set pressure(value: number) {
  //   this._pressure = value;
  // }

  // public get updatedAt() : Date {
  //   return this._updatedAt;
  // }

  // public set updatedAt(value: Date) {
  //   this._updatedAt = value;
  // }
}
