var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL('BirthdayImage.jpg', function (Img) {
        block_obj = Img;
        block_obj.scaleToHeight(1000);
        block_obj.scaleToWidth(700);
        block_obj.set({
            top: 0,
            left: 0
        });
        canvas.add(block_obj);
    });
}

function playSound() {
   x.play();
}
