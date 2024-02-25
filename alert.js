$("#copy").click(function () {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");
    
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
    },2500);
  });

  $(".shorten").click(function () {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("failed");
    
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("failed");
    },1500);
  });