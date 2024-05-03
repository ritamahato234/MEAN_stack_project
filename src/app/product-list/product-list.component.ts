import { Component, OnInit  } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgModule } from '@angular/core';
// import * as $ from 'jquery';
// import { ModalDirective } from 'ngx-bootstrap/modal';
console.log("jkfghekghw")
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;
  searchText: any;
  filteredProductList: any;
  editedProduct: any;
 
  constructor(private product:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    this.retrieveProductList();

  }
  retrieveProductList(): void {
    this.product.productList()
      .subscribe(
        data => {
          this.productList = data;
          this.filteredProductList = data; // Initially set filteredProductList same as productList
          this.search(); // Call search function to show all data initially
        },
        error => {
          console.log(error);
        });
  }

  search(value?: string): void {
    if (value) {
      this.filteredProductList = this.productList.filter((product: any) =>
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        (product.price && product.price.toString().includes(value.toLowerCase())) ||
        (product.description && product.description.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      this.filteredProductList = this.productList; // If search text is empty, show all products
    }
  }


  deleteProduct(id: any): void {
    console.log("id",id)
    if (confirm("Are you sure you want to delete this product?")) {
        this.product.deleteProduct(id)
            .subscribe(
                response => {
                  console.log("resp", response);
                  alert(response.message); // Display the response message
                  this.retrieveProductList(); // Refresh product list
                },
                error => {
                    console.log(error);
                    alert("Error occurred while deleting the product!");
                }
            );
    }
}




}
