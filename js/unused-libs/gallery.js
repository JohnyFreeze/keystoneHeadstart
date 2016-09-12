/**
 * Created by Michal on 15. 3. 2016.
 */

$(window).load(function () {
    render();
});

$(window).resize(function (){
    //console.log('resize');
    render();
});

function render() {
    $('.gallery').find('img').each(function () {
        //todo - kontrolovat, jestli parent existuje?

        var theImage = new Image();
        theImage.src = $(this).attr("src");
        //console.log('image src ' + theImage.src);

        var parent = $(this).parent().closest('div');
        var parentRation = parent.height() / parent.width();
        var imgRatio =   theImage.height / theImage.width;

        //console.log('parent height ' + parent.height() + ' parent width ' + parent.width());
        //console.log('this height ' + this.height + ' this width ' + this.width);
        //console.log('parent ' + parentRation + ' img ' + imgRatio);
        //console.log('the image '+ theImage.height + ' ' + theImage.width);

        //var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        var imgClass = (imgRatio < parentRation) ? 'wide' : 'tall';
        //console.log('imgClass ' + imgClass);
        $(this).removeClass().addClass(imgClass);
    });

}


