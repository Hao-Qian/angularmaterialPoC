import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route:ActivatedRoute, private service:UserService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.user = this.service.userById(id);
    })
  
  
  }

}
