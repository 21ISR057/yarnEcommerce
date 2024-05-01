
import { Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './form/form.component';
const routeConfig: Routes = [
    {
      path: '',
      component: ProductlistComponent,
      title: 'Home page'
    },
    {
      path: 'cart',
      component: CartComponent,
      title: 'Home details'
    },
    {
      path: 'cart/form',
      component: FormComponent,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;