"use strict";

var fadeOut = function fadeOut(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'opacity';
  target.style.transitionDuration = duration + 'ms';
  target.style.opacity = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('opacity');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var fadeIn = function fadeIn(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";
  target.style.opacity = 0;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = displayBlock;
  target.style.display = display;
  target.style.transitionProperty = "opacity";
  target.style.transitionDuration = duration + 'ms';
  window.setTimeout(function () {
    target.style.opacity = 1;
    window.setTimeout(function () {
      target.style.removeProperty('opacity');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }, 1);
};

var fadeToggle = function fadeToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

  if (window.getComputedStyle(target).display === 'none') {
    return fadeIn(target, duration, displayBlock);
  } else {
    return fadeOut(target, duration);
  }
};

var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = displayBlock;
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var displayBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "block";

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration, displayBlock);
  } else {
    return slideUp(target, duration);
  }
};
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var secListBlock = document.getElementById('sec-list');

  if (secListBlock) {
    var secMonitor = function secMonitor() {
      if (window.innerWidth > 1300) {
        var yOffset = window.pageYOffset;
        var windowH = window.innerHeight;
        var indexNewPagItem = 0;
        var indexOldSec = 0;
        var indexNewSec = 0;
        secList.forEach(function (sec, index) {
          if (yOffset + windowH > sec.offsetTop) {
            indexNewPagItem = index;

            if (sec.classList.contains('if-white')) {
              document.getElementById('about-pag').classList.add('white');
            } else {
              document.getElementById('about-pag').classList.remove('white');
            }

            indexNewSec = index;
          }
        });

        if (yOffset == 0) {
          indexNewPagItem = 0;

          if (secList[0].classList.contains('if-white')) {
            document.getElementById('about-pag').classList.add('white');
          } else {
            document.getElementById('about-pag').classList.remove('white');
          }

          indexNewSec = 0;
        }

        if (indexNewPagItem != indexOldSec) {
          indexOldSec = indexNewSec;
          aboutPagItems.forEach(function (el, index) {
            el.classList.remove('active');
          });
          aboutPagItems[indexNewPagItem].classList.add('active');
        } else {
          if (yOffset == 0) {
            indexOldSec = indexNewSec;
            aboutPagItems.forEach(function (el, index) {
              el.classList.remove('active');
            });
            aboutPagItems[indexNewPagItem].classList.add('active');
          }
        }
      }
    };

    var secList = secListBlock.querySelectorAll('.sec');
    var aboutPagItems = document.getElementById('about-pag').querySelectorAll('.about-pag__item');
    secMonitor();
    window.addEventListener('scroll', function () {
      secMonitor();
    });
    aboutPagItems.forEach(function (btn, index) {
      return btn.addEventListener('click', function () {
        window.scrollTo({
          top: secList[index].offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      });
    });
  }
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    headerFix();
  });

  function headerFix() {
    if (window.pageYOffset > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  headerFix();
  var burger = document.getElementById('burger');
  var burgerfFag = true;
  burger.addEventListener('click', function () {
    if (burgerfFag) {
      burgerfFag = false;
      burger.closest('.header-menu').classList.toggle('active');
      header.classList.toggle('burger-open');

      if (window.innerWidth > 991) {
        slideToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block');
      } else {
        fadeToggle(burger.closest('.header-menu').querySelector('.header__nav'), 300, 'block');
      }

      setTimeout(function () {
        burgerfFag = true;
      }, 300);
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.header-menu') && burger.closest('.header-menu').classList.contains('active')) {
      burger.closest('.header-menu').classList.remove('active');
      slideUp(burger.closest('.header-menu').querySelector('.header__nav'), 300);
    }

    if (!e.target.closest('.header__flat')) {
      slideUp(header__flat.querySelector('.header__flat__list'), 300);
    }
  });
  var header__flat = document.getElementById('header__flat');
  header__flat.addEventListener('click', function () {
    slideToggle(header__flat.querySelector('.header__flat__list'), 300, 'block');
  });
  var header__nav = document.getElementById('header__nav');

  function refreshHeader() {
    if (window.innerWidth > 991) {
      document.querySelector('.header__wrap__right').prepend(header__flat);
      document.querySelector('.header__wrap__right').prepend(document.querySelector('.header__phone'));
    } else {
      header__nav.prepend(header__flat);
      header__nav.prepend(document.querySelector('.header__phone'));
    }
  }

  refreshHeader();
  window.addEventListener('resize', function () {
    refreshHeader();
    footerWidth();
  }); // const swiper = new Swiper('.sec2__slider', {
  //   // If we need pagination
  //   spaceBetween: 20,
  //   speed: 500,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 6000,
  //   },
  // });

  new Swiper('#partition__slider-1', {
    pagination: {
      el: '.partition__pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 6000
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  new Swiper('#partition__slider-2', {
    pagination: {
      el: '.partition__pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 6000
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  new Swiper('#sec5-slider', {
    pagination: {
      el: '.custom-pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    autoplay: {
      delay: 7000
    }
  });
  new Swiper('#sec7-slider', {
    pagination: {
      el: '.custom-pagination',
      bulletClass: 'custom-pagination-bullet',
      bulletActiveClass: 'custom-pagination-bullet-active',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    autoplay: {
      delay: 6000
    }
  }); //footer drop

  var footerBtns = document.querySelectorAll('.footer__drop__btn');

  function footerWidth() {
    footerBtns.forEach(function (elem) {
      var footerDropParent = elem.parentElement;
      var footerDropBox = footerDropParent.querySelector('.footer__drop__box');

      if (window.innerWidth < 600) {
        elem.addEventListener('click', function () {
          footerDropParent.classList.toggle('active');
          slideToggle(footerDropBox, 300, 'block');
        });
      } else {
        footerDropParent.classList.remove('active');
        footerDropBox.removeAttribute('style');
      }
    });
  }

  footerWidth();
  new Swiper('#calcSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 1,
    autoplay: {
      delay: 6000
    }
  });
  var openCalcBtn = document.querySelectorAll('.open-calc-modal');

  if (openCalcBtn.length) {
    openCalcBtn.forEach(function (btn) {
      return btn.addEventListener('click', function () {
        document.getElementById('calc-modal').classList.add('active');
      });
    });
    document.querySelector('.calc-modal__close').addEventListener('click', function () {
      document.getElementById('calc-modal').classList.remove('active');
    });
  }

  var header__phone = document.querySelector('.header__phone');
  var backModal = document.getElementById('back-modal');
  var backModalSenk = document.getElementById('back-modal-senk');
  var backModalForm = document.getElementById('back-modal-form');
  var backModalClose = document.getElementById('back-modal__close');
  header__phone.addEventListener('click', function () {
    fadeIn(backModal, 300, 'flex');
  });
  backModalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fadeOut(backModal);
    fadeIn(backModalSenk, 300, 'flex');
    return false;
  });
  backModalClose.addEventListener('click', function () {
    fadeOut(backModalSenk);
  });
  document.querySelectorAll('.back-modal__close').forEach(function (el, index) {
    el.addEventListener('click', function () {
      fadeOut(backModal);
      fadeOut(backModalSenk);
    });
  });
});
"use strict";

Number.prototype.toDivide = function () {
  var _int = String(Math.trunc(this));

  if (_int.length <= 3) return _int;
  var space = 0;
  var number = '';

  for (var i = _int.length - 1; i >= 0; i--) {
    if (space == 3) {
      number = ' ' + number;
      space = 0;
    }

    number = _int.charAt(i) + number;
    space++;
  }

  return number;
};

var myRangeSlider = document.querySelectorAll('.range-slider');
myRangeSlider.forEach(function (el, index) {
  var handle;
  var sufix = '';
  rangesliderJs.create(el, {
    onInit: function onInit(value, percent, position) {
      handle = el.closest('.input-range').querySelector('.rangeslider__handle');
      sufix = el.getAttribute('data-sufix');

      if (sufix == null) {
        sufix = '';
      }

      var divideVal = value.toDivide();
      handle.innerHTML = '';
      handle.insertAdjacentHTML('afterbegin', '<span>' + divideVal + ' ' + sufix + '</span>');
    },
    onSlide: function onSlide(value, percent, position) {
      var divideVal = value.toDivide();
      handle.innerHTML = '';
      handle.insertAdjacentHTML('afterbegin', '<span>' + divideVal + ' ' + sufix + '</span>');
    }
  });
});
var rangeSlider = document.querySelectorAll('.new-range-slider');
rangeSlider.forEach(function (el, index) {
  var sufix = el.getAttribute('data-sufix');
  var slider = new Slider(el, {
    isDate: false,
    min: Number(el.getAttribute('data-min')),
    max: Number(el.getAttribute('data-max')),
    start: Number(el.getAttribute('data-start')),
    end: Number(el.getAttribute('data-end')),
    overlap: true
  });
  var handleLeft = el.closest('.input-range').querySelector('.input-range__start');
  var handleRight = el.closest('.input-range').querySelector('.input-range__end');
  var inputStart = el.closest('.input-range').querySelector('.input-start');
  var inputEnd = el.closest('.input-range').querySelector('.input-end');

  function rangeChange(data) {
    var divideVal = data.right.toDivide();
    handleRight.innerHTML = '';
    handleRight.insertAdjacentHTML('afterbegin', '<span>' + divideVal + ' ' + sufix + '</span>');
    var divideVal = data.left.toDivide();
    handleLeft.innerHTML = '';
    handleLeft.insertAdjacentHTML('afterbegin', '<span>' + divideVal + ' ' + sufix + '</span>');
    inputStart.value = data.left;
    inputEnd.value = data.right;
  }

  rangeChange(slider.getInfo());
  slider.subscribe('moving', function (data) {
    rangeChange(data);
  });
});
"use strict";
//# sourceMappingURL=main.js.map
