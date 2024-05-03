import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: any = {};
  constructor(private productService: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(productData: any): void {

    if (!productData.title || !productData.price || !productData.description || !productData.published) {
      alert("Please fill all the fields");
      return;
    }

    // Send form data to the API
    this.productService.addProduct(productData)
      .subscribe(
        response => {
          console.log(response);
          alert("Product added successfully!");
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
          alert("Error occurred while adding the product!");
        }
      );
  }
}
