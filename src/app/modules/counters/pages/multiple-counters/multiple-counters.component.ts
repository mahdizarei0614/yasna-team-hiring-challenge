import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-counters',
  templateUrl: './multiple-counters.component.html',
  styleUrls: ['./multiple-counters.component.scss']
})
export class MultipleCountersComponent implements OnInit {

  counters = [
    {
      step: 3,
      counter: 0
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addCounter() {
    // @ts-ignore
    // tslint:disable-next-line:radix
    if (document.getElementById('new-counter').value !== '' && parseFloat(document.getElementById('new-counter').value) !== 0) {
      this.counters.push({
        // @ts-ignore
        // tslint:disable-next-line:radix
        step: parseFloat(document.getElementById('new-counter').value),
        counter: 0
      });
      // @ts-ignore
      document.getElementById('new-counter').value = '';
      document.getElementsByClassName('add-counter')[0].classList.remove('border-danger');
    } else {
      document.getElementsByClassName('add-counter')[0].classList.add('border-danger');
    }
  }

  runClick(i) {
    this.counters[i].counter += this.counters[i].step;
  }

  inputFocusIn() {
    document.getElementsByClassName('add-counter')[0].classList.add('border-primary');
  }

  inputFocusOut() {
    document.getElementsByClassName('add-counter')[0].classList.remove('border-primary');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 3 || charCode > 57 || charCode === 47 || charCode === 44)) {
      return false;
    }
    return true;

  }
}
