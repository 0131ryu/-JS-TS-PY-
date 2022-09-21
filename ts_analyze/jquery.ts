import $ from 'jquery'

const $p = $( "p" )

// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
// removeClass(className_function?: string | string[] | ((this: TElement, index: number, className: string) => string)): this;
$("p").removeClass("myClass").addClass("yourClass");
$(["p", "t"]).text("hello")
const tag = $("ul li").addClass(function(index) {
    return "item-" + index;
})
$(tag).html(function (i: number) {
    console.log(this);
    return $(this).data('name') + "입니다.";
})
