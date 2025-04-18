import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxMarqueeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ShowMenue:Boolean = false;
  showMenue(){
    this.ShowMenue = !this.ShowMenue
    console.log(this.ShowMenue);
  }
  ngAfterViewInit(): void {     
    gsap.registerPlugin(ScrollTrigger);
    // Vérifie si la plateforme est le navigateur
    if (isPlatformBrowser(this.platformId)) {
      console.log('Exécution dans le navigateur.');

      // Vérifie si les éléments existent avant d'appliquer GSAP
      const scrollingText = document.querySelector('.scrolling-text');
      const items = document.querySelectorAll('.item');
      const avis = document.querySelectorAll('.avis_item')
      const timeline = document.querySelectorAll(".timeline")
      if (scrollingText) {
        gsap.to(".scrolling-text", {
          x: 2000,
          duration: 0.1,
          scrollTrigger: {
            trigger: '.scrolling-text',
            start: 'top 70%',
            scrub: 1
          }
        });
      } else {
        console.warn('Aucun élément trouvé pour .scrolling-text');
      }

      if (items.length) {
        gsap.from(".item", {
          scale: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.projet-content',
            start: 'top 100%',
            end: 'top 40%',
            scrub: 1,
          }
        });
      } else {
        console.warn('Aucun élément trouvé pour .item');
      }
      if(avis.length){
        gsap.from(".avis_item", {
          x:500,
          duration: 1,
          scrollTrigger: {
            trigger: '.container_avis',
            start: 'top 100%',
            end: 'top 70%',
            scrub: 1,
          }
        })
      }
      if(timeline.length){
        gsap.from(".step1",{
          y:305,
          duration:4,
          scrollTrigger:{
            trigger:".step1",
            start:"top 100%",
            end: "top 70%",
            scrub:1
          }
        })
        
      }
      if(timeline.length){
        gsap.from(".step2",{
          y:305,
          duration:4,
          scrollTrigger:{
            trigger:".step2",
            start:"top 100%",
            end: "top 70%",
            scrub:1
          }
        })
        
      }
      // if(timeline.length){
      //   gsap.from(".step3",{
      //     y:305,
      //     zIndex:1,
      //     duration:2,
      //     scrollTrigger:{
      //       trigger:".step3",
      //       start:"top 100%",
      //       end: "top 90%",
      //       scrub:1
      //     }
      //   })
        
      // }
      
    } else {
      console.warn('Exécution côté serveur - animations désactivées.');
    }

  }

  title = 'Andorica';
}
