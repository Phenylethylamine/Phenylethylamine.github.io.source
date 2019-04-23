$(function () {
    tocController.init();
});

var tocController = {
    init: function () {
        // 모바일 TOC 토글
        this.tocTitle = $('#tocSection > .title');
        this.tocTitle.on('click', $.proxy(this.onClickTocTitle, this));

        // PC TOC 스크롤
        this.tocSection = $('#tocSection');
        $(window).on('scroll', $.proxy(this.onScroll, this));

        // #categories, #tags 가 현재 경로, 보고있는 페이지 내용과 일치하면 selected 처리
        this.categories = $('#categories');
        this.tags = $('#tags');
        this.setSelectedStats();
    },
    onClickTocTitle: function () {
        $('div.markdownToc').toggleClass('d-none');
    },
    onScroll: function () {
        this.tocSection.css({'top': $(window).scrollTop() + 'px'});
    },
    setSelectedStats: function () {
        this.categories.find('a').each(function(){
            var $this = $(this);
            if (location.href.indexOf($this.attr('href')) > -1) {
                $this.parent().addClass('selected');
            }
        });
        this.tags.find('a').each(function(){
            var $this = $(this);
            if (location.href.indexOf($this.attr('href')) > -1) {
                $this.parent().addClass('selected');
            }
        });
    }
}