import { AddressService } from './../../services/address.service';
import { Address } from './../../models/address';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address = null;
  @Input() addresses:Address[];
  @Output() deleteAddress = new EventEmitter();

  @Output() editAddress = new EventEmitter();
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  edit() {
    this.editAddress.emit(this.address);
  }

  delete() {
    console.log(this.address)
    this.deleteAddress.emit(this.address.addressId);
  }

  // edit() {
  //   this.addressService.edit()
  // }

}