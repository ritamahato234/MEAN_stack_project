import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditModalComponent {
  // @Input() product: any;
  // @Output() save = new EventEmitter<any>();
  
  productId: any;
  productData: any = {};

  constructor(
    private productService: ApiserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProduct(this.productId);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(
        data => {
          this.productData = data;
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.productId, this.productData)
      .subscribe(
        response => {
          console.log(response);
          alert("Product edited successfully!");
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
          alert("Error occurred while adding the product!");
        });
  }
  
}
