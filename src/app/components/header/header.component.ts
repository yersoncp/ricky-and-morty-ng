import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  formSearch!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.formSearch = this.fb.group({
      search: [null],
    });
  }

  handleSearchSubmit(): void {
    const { search } = this.formSearch.value;
    const context = this.getContextUrl();
    this.router.navigate([`/${context}`], { queryParams: { search } });
  }

  private getContextUrl() {
    const validURLContext = ['character', 'location', 'episode'];
    const name = window.location.pathname.split('/')[1];
    return validURLContext.includes(name) ? name : null;
  }

}
