import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(">>>");
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
