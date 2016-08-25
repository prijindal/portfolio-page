import { Component, ChangeDetectorRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'work',
  templateUrl:'./work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  sections = [];
  marginTop = 0;

  constructor(
    private ref: ChangeDetectorRef
  ) {
    for(let i =1;i <= 5; ++i) {
      this.sections.push({
        text: 'Text for Section #' + i,
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
    this.watchScroll();
  }

  initResize() {
    $(window).resize(() => {
      this.resizeImage();
    })
    $('img').load(() => {
      this.resizeImage();
    });
  }

  resizeImage() {
    var windowWidth = $(window).width();
    var imgWidth = $('img').width();
    var diff = windowWidth - imgWidth;
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

  watchScroll() {
    $(window).scroll(() => {
      var height = $('html').height();
      this.marginTop = 675*($(window).scrollTop()/height)/54;
      // $('.work-titles-container').css({'margin-top': marginTop});
      // this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    $.fn.fullpage.destroy();
  }
}
