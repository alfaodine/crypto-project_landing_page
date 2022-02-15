let videoFrame = document.querySelector('.video__frame');
let stateCheck = 0;
videoLink = '<iframe width="100%" height = "100%" src="https://www.youtube.com/embed/Fu4BzQNN0Qs?start=43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style = "position: absolute;top: 0;left: 0;width: 100%;height: 100%; z-index: 1;"></iframe> ';

videoFrame.addEventListener('click', function () {
    if (stateCheck === 0){
    videoFrame.innerHTML = videoLink;
    videoFrame.setAttribute('style', 'padding-bottom: 56.25%; height: 0;')
    stateCheck = 1;
    }
})