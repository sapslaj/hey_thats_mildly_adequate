function filename() {
  if (Math.random() <= 0.2) {
    return "/assets/mildly_adequate_mm.ogg";
  } else {
    return "/assets/mildly_adequate.ogg";
  }
};

var audio = new Audio(filename());
audio.play();
