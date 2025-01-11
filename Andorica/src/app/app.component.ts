import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".item", {
      scale:0,
      duration:1,
      scrollTrigger:{
        trigger: '.projet-content',
        start: 'top 100%',
        end:'top 40%',
        scrub: 1,
      }
    })
    gsap.to(".scrolling-text", {
      x:2000,
      duration:.1,
      scrollTrigger:{
        trigger: '.scrolling-text',
        start: 'top 70%',
        scrub: 1
      }
    })
  }
  title = 'Andorica';
}
