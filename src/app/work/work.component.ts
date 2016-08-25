import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'work',
  templateUrl:'./work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  sections = [];
  marginLeft = 0;

  constructor() {
    for(let i =1;i <= 5; ++i) {
      this.sections.push({
        id: 'section' + i.toString(),
        img: 'https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/bg' + i +'.jpg'
      });
    }
  }

  ngAfterViewInit() {
    $('#fullpage').fullpage({
      'verticalCentered': false,
      scrollBar: true,
      css3: true,
      scrollingSpeed: 700,
      responsiveWidth: 640
    });
    this.initResize();
  }

  initResize() {
    $('img').load(() => {
      this.resizeImage();
    });
    $(window).resize(() => {
      this.resizeImage();
    })
  }

  resizeImage() {
    var windowWidth = $(window).width();
    var imgWidth = $('img').width();
    var diff = windowWidth - imgWidth;
    console.log(diff, windowWidth, imgWidth);
    var options = {}
    if (diff >= 0) {
      options['width'] = '100%';
      options['height'] = 'initial';
      options['margin-left'] = 'initial';
    }
    else {
      options['height'] = '100%';
      options['width'] = 'initial';
      options['margin-left'] = diff/2;
    }
    $('img').css(options);
  }

  ngOnDestroy() {
    $.fn.fullpage.destroy();
  }
}
