import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import {Store} from '@ngrx/store';
import {loadUsers} from '../../store/user/user.actions';
import { selectUsers, selectUserLoading } from '../../store/user/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users$: Observable<User[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectUserLoading);
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
