import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/customers'>Customers</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Products</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/orders'>Orders</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/suggestions'>Future Sales</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = '';
}
