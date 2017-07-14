import {Injectable} from "@angular/core";


@Injectable()
export class SimpleCaptchaService  {

  public getRandom() {
    return Math.floor(Math.random() * 1000000);
  }

  public compareValue (a: string, b: string): boolean {
    return (a == b) ? true : false
  }

}
