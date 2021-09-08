import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  toggleClass: boolean = false;

  arrow = document.querySelectorAll(".arrow");

  ngOnInit(): void {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        var barElement: EventTarget | null = e.target;
        let arrowParent = (barElement as HTMLElement)?.parentElement?.parentElement;//selecting main parent of arrow
        console.log(arrowParent)
        arrowParent?.classList.toggle("showMenu");
      });
    }
  }

  open() {
    document.querySelector(".sidebar")?.classList.toggle("close");
  }
}
