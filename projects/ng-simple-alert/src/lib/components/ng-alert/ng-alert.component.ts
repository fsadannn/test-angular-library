import { Component, OnInit } from '@angular/core';
import {
  AlertMessage,
  NgAlertService,
} from '../../services/alert-message.service';
import { Observable, Subject, merge } from 'rxjs';

@Component({
  selector: 'lib-ng-alert',
  templateUrl: './ng-alert.component.html',
  styleUrls: ['./ng-alert.component.scss'],
})
export class NgAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgAlertService) {}

  public ngOnInit(): void {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
