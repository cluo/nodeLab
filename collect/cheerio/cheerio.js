/**
 * Created by admin on 15-2-4.
 */
var cheerio = require('cheerio');
$ = cheerio.load('<ul id="fruits"><li></li><li></li><li></li></ul>');
var length = $('#fruits > li').length;
console.log(length);
console.log($('ul').attr('id'));
console.log($.html())

var data = $('<div data-apple-color="red"></div>').data();
console.log(data);

var data = $('<div data-apple-color="red"></div>').data('appleColor');
console.log(data);

var obj = $('<div id="mark" data-apple-color="red"><li>1</li><li class="li2">2</li><li>3</li></div>').data('kind', 'cluo');
var kind = obj.data('kind');
console.log(kind);


var obj = obj.addClass('cluo1 cluo2');
console.log(obj.hasClass('cluo1'));
console.log(obj.hasClass('cluo2'));

obj.removeClass('cluo2');
var cs = obj.attr('class');
console.log(cs);

var len = obj.find('li').length;
console.log(len);


$('.pear').siblings().length
//=> 2

$('.pear').siblings('.orange').length
//=> 1


$('#fruits').children().length
//=> 3

$('#fruits').children('.pear').text()
//=> Pear

$('li').filter('.orange').attr('class');
//=> orange
//Function:

    $('li').filter(function(i, el) {
        // this === el
        return $(this).attr('class') === 'orange';
    }).attr('class')
//=> orange


//Selector:

    $('li').not('.apple').length;
//=> 2
//Function:

    $('li').not(function(i, el) {
        // this === el
        return $(this).attr('class') === 'orange';
    }).length;
//=> 2


//.get( [i] )

//Retrieve the DOM elements matched by the Cheerio object. If an index is specified, retrieve one of the elements matched by the Cheerio object:

    $('li').get(0).tagName
//=> li
//If no index is specified, retrieve all elements matched by the Cheerio object:

    $('li').get().length
//=> 3


$('li').eq(0).text()
//=> Apple

$('li').eq(-1).text()
//=> Pear

$('.pear').index()
//=> 2
$('.orange').index('li')
//=> 1
$('.apple').index($('#fruit, li'))
//=> 1