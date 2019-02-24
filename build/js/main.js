jQuery(document).ready(function () {

    var $ = jQuery, $doc = $(document), $win = $(window);

  var onInitialized = function(e){
    // сначала выделяем нужный слайд...
    var current = $($('.header__slider .active img')[0]);
    var other = $('.header__slider-item');
    var parent = current.parent();
    other.removeClass('focus');
    parent.addClass('focus');

    // меняем фон
    var slide = current.attr('data-img');

    $('.index__banner__item').removeClass('active');
    $('#' + slide).addClass('active');
  };

  $('.header__slider').owlCarousel({
    loop: true,
    nav: true,
    dotsEach: true,
    autoplay: true,
    smartSpeed: 1000,
    navigation: false,
    navText: [],
    items:1,
  });

  $('.eye').click(function () {
    var p = $(this).parent();
    $(this).toggleClass('eye--close');
    if ($(this).hasClass('eye--close')) {
      $('input', p).attr('type', 'text');
    } else {
      $('input', p).attr('type', 'password');
    }

  });
});

/*
*
*  var onInitialized = function(e){
 // сначала выделяем нужный слайд...
 var current = $($('.index__slider .active img')[0]);
 var other = $('.index__slider__item');
 var parent = current.parent();
 other.removeClass('focus');
 parent.addClass('focus');

 // меняем фон
 var slide = current.attr('data-img');

 $('.index__banner__item').removeClass('active');
 $('#' + slide).addClass('active');
 };

 var onInitializedProduct = function(e){
 // сначала выделяем нужный слайд...
 var $this = $('.catalog-full__slider__gallery');
 var current = $($('.active img', $this)[0]);
 var other = $('.item', $this);
 var parent = current.parent();
 other.removeClass('focus');
 parent.addClass('focus');


 // меняем фон
 var photo = current.attr('data-photo');

 $('.catalog-full__slider__big-photo').removeClass('animated');
 setTimeout(function () {
 $('.catalog-full__slider__big-photo').css({
 backgroundImage: 'url(images/'+photo+')'
 }).addClass('animated');

 }, 500);
 };

 $('[name="phone"]').mask("+7(999)999-99-99");

 $('.index__slider').owlCarousel({
 loop: true,
 nav: true,
 dotsEach: false,
 autoplay: true,
 smartSpeed: 4000,
 navigation: false,
 navText: [],
 responsive:{
 0:{
 items:2,
 nav:true
 },
 766:{
 items:3,
 nav:true
 },
 1280:{
 items:4,
 nav:true
 }
 },
 onTranslated: onInitialized,
 onInitialized: onInitialized
 });

 $('.catalog-full__slider__gallery').owlCarousel({
 loop: true,
 nav: true,
 dotsEach: false,
 autoplay: false,
 smartSpeed: 1000,
 navigation: false,
 navText: [],
 responsive:{
 0:{
 items:5,
 nav:true
 },
 766:{
 items:5,
 nav:true
 },
 1280:{
 items:5,
 nav:true
 }
 },
 onTranslated: onInitializedProduct,
 onInitialized: onInitializedProduct
 });

 $('.number').each(function () {
 var $this = $(this);
 var inp = $('input', $this);
 var min = $('.number__minus', $this);
 var max = $('.number__plus', $this);
 var currentText = inp.val()*1;
 var changeText = currentText;
 min.click(function () {
 if (changeText > 1) {
 changeText--;
 inp.val(changeText);
 }

 });
 max.click(function () {
 changeText++;
 inp.val(changeText);
 });

 });

 $('.index__gallery__desktop').owlCarousel({
 loop: true,
 nav: false,
 dots: true,
 dotsEach: true,
 autoplay: false,
 smartSpeed: 1000,
 navigation: false,
 navText: [],
 items: 1
 });

 $('.index__gallery__mobile').owlCarousel({
 loop: true,
 margin: 10,
 nav: false,
 dots: true,
 dotsEach: true,
 autoplay: false,
 smartSpeed: 1000,
 navigation: false,
 navText: [],
 responsive:{
 0:{
 items:1,
 nav:true
 },
 766:{
 items:2,
 nav:true
 }
 },
 });

 $('.index__sale__slider').owlCarousel({
 loop: true,
 nav: false,
 dots: true,
 dotsEach: true,
 autoplay: false,
 smartSpeed: 1000,
 navigation: false,
 navText: [],
 items: 1
 });

 var filter = $('.catalog__filter'),
 menuDevice = $('.header--mobile'),
 sortPanel = $('.catalog__sorter__device');

 $('#filter-open').click(function () {
 menuDevice.addClass('out-active');
 filter.addClass('active');
 });

 $('.close', filter).click(function () {
 menuDevice.removeClass('out-active');
 filter.removeClass('active');
 });

 $('#sort-open').click(function () {
 menuDevice.addClass('out-active');
 sortPanel.addClass('active');
 });

 $('.close', sortPanel).click(function () {
 menuDevice.removeClass('out-active');
 sortPanel.removeClass('active');
 });

 $('.sort_btn').click(function () {
 var $this = $(this);
 if ($this.hasClass('sort__desc') || $this.hasClass('sort__asc')) {
 $this.toggleClass('sort__desc sort__asc');
 }
 else {
 $('.sort_btn').removeClass('sort__desc sort__asc');
 $this.addClass('sort__desc');
 }
 });



$('.slider').each(function () {
  var $this = $(this);
  var id = $this.attr('data-id');

  var cost_min = $('#first-' + id).val() * 1;
  var cost_max = $('#last-'+ id).val() * 1;
  var slider_min = $this.attr('data-min') * 1;
  var slider_max = $this.attr('data-max') * 1;

  var min = $('.slider__min', $this);
  var max = $('.slider__max', $this);

  var CostSlider = document.getElementById('slider-' + id);
  noUiSlider.create(CostSlider, {
    start: [cost_min, cost_max],
    connect: true,
    step: 1,
    range: {
      'min': slider_min,
      'max': slider_max
    }
  });
  var cost_first = document.getElementById('first-' + id);
  var cost_last = document.getElementById('last-' + id);

  min.text(cost_min);
  max.text(cost_max);

  CostSlider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];
    if (handle) {
      cost_last.value = Math.round(value);
      max.text(Math.round(value));
    } else {
      cost_first.value = Math.round(value);
      min.text(Math.round(value));
    }

    $('#cost-first').change();
  });

  cost_first.addEventListener('change', function () {
    CostSlider.noUiSlider.set([this.value, null]);
  });

  cost_last.addEventListener('change', function () {
    CostSlider.noUiSlider.set([null, this.value]);
  });
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  if ($this.prop('disabled')) {
    $styledSelect.addClass('disabled');
    $('.select').addClass('disabled');
  }

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

$('.filter__accordeon').each(function () {
  var $this = $(this);
  var title = $('.filter__accordeon__title', $this);
  title.click(function () {
    $this.toggleClass('active');
  });
});

$('.button--togle-menu').click(function () {
  $('.menu-device').addClass('active');
  $('body').addClass('not-active');
});

$('.menu-device__close').click(function () {
  $('.menu-device').removeClass('active');
  $('body').removeClass('not-active');
});

$('.header__bottom-panel .search .search--button').click(function () {
  $('.search__form').addClass('open');
  $('.header__menu').addClass('disabled');
  $('.search__form input').focus();
});

$(document).click(function (event) {
  if ($(event.target).closest(".search__form").length) return;
  if ($(event.target).closest(".header__bottom-panel .search").length) return;
  $('.search__form').removeClass('open');
  $('.header__menu').removeClass('disabled');

  event.stopPropagation();
});

$('.index__brands__tab').click(function () {

  if (!$(this).hasClass('active')) {
    $('.index__brands__tab').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-tab');
    $('.index__brands__cont').removeClass('active');
    $('#'+ id).addClass('active');
  }

});

$('.profile__tab').click(function () {

  if (!$(this).hasClass('active')) {
    $('.profile__tab').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-tab');
    $('.profile__cont').removeClass('active');
    $('#'+ id).addClass('active');
  }

});

$('.catalog-full__tab').click(function () {

  if (!$(this).hasClass('active')) {
    $('.catalog-full__tab').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-tab');
    $('.catalog-full__cont').removeClass('active');
    $('#'+ id).addClass('active');
  }

});

$('[data-fancybox]').fancybox({

});

$('.form_select select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;


  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  if ($this.prop('disabled')) {
    $styledSelect.addClass('disabled');
    $('.select').addClass('disabled');
  }

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    var li = $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
    if (($this.val() == 0 && i == 0) || $this.val() == $this.children('option').eq(i).val()) {
      li.addClass('selected');
      $styledSelect.text($this.children('option').eq(i).text());
    }

  }

  var $listItems = $list.children('li');

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('.select-styled').removeClass('active').next('ul.select-options').hide();
    $(this).toggleClass('active').next('ul.select-options').toggle();

  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $listItems.removeClass('selected');
    $(this).addClass('selected');
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

$('.select__city select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  if ($this.prop('disabled')) {
    $styledSelect.addClass('disabled');
    $('.select').addClass('disabled');
  }

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    var li = $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
    if (i == 0) {
      li.addClass('selected');
    }
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $listItems.removeClass('selected');
    $(this).addClass('selected');
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

$('.eye').click(function () {
  var p = $(this).parent();
  $(this).toggleClass('eye--close');
  if ($(this).hasClass('eye--close')) {
    $('input', p).attr('type', 'text');
  } else {
    $('input', p).attr('type', 'password');
  }

});

$('[data-link]').click(function () {
  var link = $(this).attr('data-link');
  $('.modal__overlay').removeClass('active');
  $('#'+ link).addClass('active');
  $('body').addClass('not-active');
});

$('.modal__window .close').click(function () {
  var p = $(this).parent().parent();
  p.removeClass('active');
  $('body').removeClass('not-active');
});

$('.accordeon__select').click(function () {
  var p = $(this).parent();
  p.toggleClass('active');
});

var geocoder;
var map;
var query = new Array(
  "7-9 Fullerton Street, Woollahra NSW 2025",
  "78 Canberra Avenue, Griffith, ACT 2603"
);

if ($('#map').is('div')) {

  var MY_MAPTYPE_ID = 'custom_style';

  function initialize() {
    geocoder = new google.maps.Geocoder();

    var featureOpts = [ { "stylers": [ { "saturation": -100 }, { "lightness": -5 } ] } ];

    var mapOptions = {
      zoom: 16,
      mapTypeControl: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeId: MY_MAPTYPE_ID,
    };

    map = new google.maps.Map(document.getElementById('map'),  mapOptions);

    var customMapType = new google.maps.StyledMapType(featureOpts);



    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);



    codeAddress();
  }

  function codeAddress() {

    for (var i = 0; i < query.length; i++) {

      var address = query[i];
      var icon = {
        path: "M43 0C19.2899 0 0 19.2813 0 42.9812C0 53.0236 3.46359 62.2718 9.25912 69.5969L43 112L76.7409 69.5969C82.5364 62.2718 86 53.0236 86 42.9812C86 19.2813 66.7101 0 43 0ZM43 61.7551C32.3274 61.7551 23.6446 53.076 23.6446 42.408C23.6446 31.74 32.3274 23.0609 43 23.0609C53.6726 23.0609 62.3554 31.74 62.3554 42.408C62.3554 53.076 53.6728 61.7551 43 61.7551Z",
        fillColor: '#EE273C',
        fillOpacity: 1,
        anchor: new google.maps.Point(0,0),
        strokeWeight: 0,
        scale: 1/4
      }

      geocoder.geocode({

          'address': address

        }, function (k) {

          return function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

              map.setCenter(results[0].geometry.location);


              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: icon,
                draggable: false,
              });

            } else {

              alert('Geocode was not successful for the following reason: ' + status);

            }

          }

        }(i)
      );

    }

  }

  google.maps.event.addDomListener(window, 'load', initialize);

  google.maps.event.addDomListener(window, "resize", function() {

    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
* */
