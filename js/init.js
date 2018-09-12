(function($){
  $(function(){

    $(".dropdown-trigger").dropdown(
      {
        inDuration: 300,
        outDuration: 225,
        hover: true,
        belowOrigin: true,
        alignment: 'right'
      }
    );
  });
}(jQuery));
