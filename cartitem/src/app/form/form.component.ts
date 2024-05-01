import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../components/cart/cart.component';
import { FormService } from '../service/form.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <main>
    <div class="container">
  <div class="title">
      <h2>Product Order Form</h2>
  </div>
<div class="d-flex">
  <form [formGroup]="applyForm" (submit)="submitApplication()">
    <label>
      <span class="fid">First id <span class="required">*</span></span>
      <input type="text" id="fid">
    </label>
    <label>
      <span class="lid">Last id <span class="required">*</span></span>
      <input type="text" id="lid">
    </label>
    <label>
      <span>Country <span class="required">*</span></span>
      <select id="selection">
        <option value="select">Select a country...</option>
        <option value="AFG">Afghanistan</option>
        <option value="ALA">Åland Islands</option>
        <option value="IND">India</option>
        <option value="IDN">Indonesia</option>
        <option value="IRN">Iran, Islamic Republic of</option>
      </select>
    </label>
    <label>
      <span>Street Address <span class="required">*</span></span>
      <input type="text" id="houseadd" placeholder="House number and street id" required>
    </label>
    <label>
      <span>&nbsp;</span>
      <input type="text" id="apartment" placeholder="Apartment, suite, unit etc. (optional)">
    </label>
    <label>
      <span>Town / City <span class="required">*</span></span>
      <input type="text" id="city"> 
    </label>
    <label>
      <span>State / County <span class="required">*</span></span>
      <input type="text" id="city"> 
    </label>
    <label>
      <span>Postcode / ZIP <span class="required">*</span></span>
      <input type="text" id="city"> 
    </label>
    <label>
      <span>Phone <span class="required">*</span></span>
      <input type="tel" id="phone"> 
    </label>
    <label>
      <span>Email Address <span class="required">*</span></span>
      <input type="email" id="email"> 
    </label>
  </form>
  <div class="Yorder">
    <table>
      <tr>
        <th colspan="2">Your order</th>
      </tr>
      <tr>
        <td>Product id x 2(Qty)</td>
        <td>$150.00</td>
      </tr>
      <tr>
        <td>Subtotal</td>
        <td>$300.00</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free shipping</td>
      </tr>
    </table><br>
    <div>
      <input type="radio" id="dbt" value="dbt" checked> Direct Bank Transfer
    </div>
    <p>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>
    <div>
      <input type="radio" id="dbt" value="cd"> Cash on Delivery
    </div>
    <div>
      <input type="radio" id="dbt" value="cd"> Paypal <span>
      <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50">
      </span>
    </div>
    <button type="submit">Place Order</button>
  </div><!-- Yorder -->
 </div>
</div>
    </main>
  `,
  styleUrl: './form.component.css'
})
export class FormComponent {
  route:ActivatedRoute =inject(ActivatedRoute);
  formservice =inject(FormService);
  cartcomponent:CartComponent |undefined;
  applyForm=new FormGroup({
    fid:new FormControl(''),
    lid:new FormControl(''),
    selection:new FormControl(''),
    houseadd:new FormControl(''),
    appartment:new FormControl(''),
    city:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
  });
  constructor(){

  }
  submitApplication() {
    this.formservice.submitApplication(
      this.applyForm.value.fid ?? '',
      this.applyForm.value.lid ?? '',
      this.applyForm.value.selection ?? '',
      this.applyForm.value.houseadd ?? '',
      this.applyForm.value.appartment ?? '',
      this.applyForm.value.city ?? '',
      this.applyForm.value.phone ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
