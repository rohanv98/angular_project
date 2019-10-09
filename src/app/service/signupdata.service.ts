import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupdataService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/signup";
  postdata(arg) {
    return this.http.post<any>(this.path, arg);
  }
}
