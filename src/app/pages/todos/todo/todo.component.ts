import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  id$: Observable<number>;
  name$: Observable<string>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.id$ = this.router.params.pipe(
      tap(console.log),
      map(parms => parms['id'])
    );

    this.name$ = this.router.params.pipe(
      tap(console.log),
      map(parms => parms['name'])
    );
  }

  ngOnDestroy(): void {}
}
