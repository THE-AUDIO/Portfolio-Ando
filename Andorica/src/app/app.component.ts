import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Vérifie si la plateforme est le navigateur
    if (isPlatformBrowser(this.platformId)) {
      console.log('Exécution dans le navigateur.');

      // Vérifie si les éléments existent avant d'appliquer GSAP
      const scrollingText = document.querySelector('.scrolling-text');
      const items = document.querySelectorAll('.item');
      const avis = document.querySelectorAll('.avis_item')

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
    } else {
      console.warn('Exécution côté serveur - animations désactivées.');
    }
  }

  title = 'Andorica';
}
