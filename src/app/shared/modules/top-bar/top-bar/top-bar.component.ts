import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  currentUserSelector,
  isAnonimusSelector,
  isLoggetInSelector,
} from 'src/app/auth/store/selectors'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  isLoggetIn$!: Observable<boolean | null>
  isAnonymus$!: Observable<boolean>
  currentUser$!: Observable<UserInterface | null>

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggetIn$ = this.store$.pipe(select(isLoggetInSelector))
    this.isAnonymus$ = this.store$.pipe(select(isAnonimusSelector))
    this.currentUser$ = this.store$.pipe(select(currentUserSelector))
  }
}
