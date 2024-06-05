import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss',
  
})
export class EmptyPageComponent {
  constructor(
    private route: ActivatedRoute,
  ) {}

  isRoute: string | undefined = this.route.snapshot.routeConfig?.path

}
