import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css'],
})
export class ListAddressComponent implements OnInit {
  constructor(private addressService: AddressService) {}
  addresses: Address[]=[];
  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses() {
    this.addressService.getAll().subscribe((res: Address[]) => {
      this.addresses = res;
    });
  }

  persistAddress(data: Address) {
    this.addressService.Save(data)
        .subscribe((res: Address) => this.addresses = [res, ...this.addresses])
  }

  deleteAddress(id) {
    console.log(id)
    this.addressService.delete(id)
      .subscribe(()=> {
       //this.addresses = this.addresses.filter(add => add.addressId !=id)
      })
  }
}
