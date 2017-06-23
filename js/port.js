var screenW = $(window).width()
var screenH = $(window).height()
var port = $("img#img")
var portH = port.height()
var portW = port.width()

port.css({
  "width": screenW,
  "height": screenH,
})
