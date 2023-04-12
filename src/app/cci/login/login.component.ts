import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enrollment } from 'src/app/core/services/datamodel/PatientRegisteration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  enrollmentId!: string| null;
  enrollment: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.enrollmentId = params.get('id');
      this.http.get<any>(`http://localhost:8090/enrollments/${this.enrollmentId}`).subscribe(
        enrollment => {
          this.enrollment = enrollment;
        },
        error => {
          console.log('Error retrieving enrollment data');
        }
      );
    });
  }

}
