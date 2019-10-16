import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Isignupdata } from "./observable";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SignupdataService {
  constructor(private http: HttpClient) {}

  path1 = "http://localhost:3000/signup";

  postdata(arg) {
    return this.http.post<any>(this.path1, arg);
  }

  path2 = "http://localhost:3000/login";
  isAuth = false;

  postdata2(arg) {
    return this.http
      .post<any>(this.path2, arg)
      .pipe(tap(x => (this.isAuth = true)));
  }
  getdata(): Observable<Isignupdata[]> {
    return this.http.get<Isignupdata[]>(this.path1);
  }
}
