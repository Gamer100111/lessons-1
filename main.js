let $ButtonWrap = $('.js-buy-nfts');
let $DiscoverAndLeftButton = $('.js-discover-and-left-button');
let $DiscoverAndLeftButtonTwo = $('.js-discover-and-left-button-two');
let $AnalyticsRightButton = $('.js-analytics-right-button');
let $AreYouReady = $('.js-are-you-ready');
let opened = 'opened';
let $PopupFormWrap = $('.js-popup-form');
let $PopupFormClose = $('.js-popup-form-close');
let $OpacityBody = $('body')


$ButtonWrap.on('click', function(){
	$PopupFormWrap.addClass(opened);
	$OpacityBody.addClass(body)
});

$PopupFormClose.on('click', function(){
	$PopupFormWrap.removeClass(opened);
});

$DiscoverAndLeftButton.on('click', function(){
	$PopupFormWrap.addClass(opened);
});

$DiscoverAndLeftButtonTwo.on('click', function(){
	$PopupFormWrap.addClass(opened);
});

$AnalyticsRightButton.on('click', function(){
	$PopupFormWrap.addClass(opened);
});

$AreYouReady.on('click', function(){
	$PopupFormWrap.addClass(opened);
});
