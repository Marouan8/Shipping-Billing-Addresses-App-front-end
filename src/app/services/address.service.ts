import { Address } from './../models/address';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/addresses`)
  }

  Save(data: Address) {
    return this.http.post(`${environment.apiUrl}/addresses`, data);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/addresses/${id}`)
  }

  edit(id, data: Address) {
    return this.http.put(`${environment.apiUrl}/addresses/${id}`,data);
  }
}
