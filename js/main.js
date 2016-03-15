requirejs.config({
    paths:{
        jquery:'../libs/jquery/jquery-1.12.1.min'
    }
});

requirejs(['jquery','backtop'],function($,backtop){
    $('#backTop').backtop({
        mode: 'move',
        speed: 1500
    });

    //new backtop.BackTop($('#backTop'),{
    //    mode: 'move',
    //    speed: 1500
    //});

    //var scroll = new scrollto.ScrollTo({
    //    dest:0,
    //    speed:2000
    //});
    //
    //$('#backTop').on('click', $.proxy(scroll.move,scroll));
});