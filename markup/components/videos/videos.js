function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

$('.video').on('click', function() {
    let media = $(this).find('.video__media');
    let id = parseMediaURL(media[0]);

    let link = $(this).children('.video__link');
	let button = $(this).find('.video__button');

    let iframe = createIframe(id);

    link.remove();
    button.remove();
    $(this).append(iframe);

	link.removeAttr('href');
	$(this).addClass('video--enabled');
});


$(document).ready(function() {
    let href = $('.videos__name--current').attr('href');
    let id = getCover(href);

    $('.video__link source').attr('srcset', 'https://i.ytimg.com/vi_webp/' + id +'/maxresdefault.webp');
    $('.video__media').attr('src', 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg');
    $('.video').addClass('video--enabled');
    
});

$('.videos__name').on('click', function(e) {
    e.preventDefault();
    
    let player = $('iframe.video__media');
    let container = $('.video.video--enabled');
    let href = $(this).attr('href');
    let id = getCover(href);

    if(player.length) {
        player.remove();

        let HTMLcover = `
            <a class="video__link">
                <picture>
                    <source srcset="https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp" type="image/webp">
                    <img src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" alt="" class="video__media">
                </picture>
                <button class="video__button" type="button" aria-label="Запустить видео">
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="48" viewBox="0 0 310 310"><path class="video__button-shape" d="M297.917 64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359 0-61.369 5.776-72.517 19.938C0 79.663 0 100.008 0 128.166v53.669c0 54.551 12.896 82.248 83.386 82.248h143.226c34.216 0 53.176-4.788 65.442-16.527C304.633 235.518 310 215.863 310 181.835v-53.669c0-29.695-.841-50.16-12.083-63.521zm-98.896 97.765l-65.038 33.991c-1.454.76-3.044 1.137-4.632 1.137-1.798 0-3.592-.484-5.181-1.446-2.992-1.813-4.819-5.056-4.819-8.554v-67.764c0-3.492 1.822-6.732 4.808-8.546 2.987-1.814 6.702-1.938 9.801-.328l65.038 33.772c3.309 1.718 5.387 5.134 5.392 8.861.004 3.73-2.065 7.151-5.369 8.877z"></path></svg>
                </button>
            </a>
        `;
        container.append(HTMLcover);
    }
    else {
        $('.video__link source').attr('srcset', 'https://i.ytimg.com/vi_webp/' + id +'/maxresdefault.webp');
        $('.video__media').attr('src', 'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg');
    }
    
    $('.videos__name--current').removeClass('videos__name--current')
    $(this).addClass('videos__name--current').closest('.videos__item').addClass('videos__item--current');
    $(this).closest('.videos__item').siblings().removeClass('videos__item--current');
});

function getCover(link) {
    let regEx = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;
    let id = link.match(regEx);
    return id[1];
}