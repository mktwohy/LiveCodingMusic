/*
@title Acid Thing
@author Maeve Twohy
*/

setcpm(120/4)

const key = "b:phrygian"

$KICK: sound("sbd!4")
  .duck("2")
  .duckdepth(.9)
  .duckattack(.2)

_$DRUMS: stack(
  sound("- rim - rim*<1!3 3>"),
  sound("hh*16").velocity("[1 .2 .7 .5]*4"),
)

$ACCENTS: n("0!5 1 7 <9 3 2>")
  .sound("square")
  .scale(key)
  .distort("24:.1")
  .trans(24)
  .detune(.2)
  .lpf(30)
  .lpenv(slider(4.34, 0, 10))
  .lpq(30)
  .euclid("<7 9 11 15>", 16)
  .postgain(.75)

$ARP: n("<0 0 7 4 1 5 0 1>*16")
  .sound("saw")
  .scale(key)
  .trans(-12)
  .distort("2:.2")
  .lpf(200)
  .lpenv(slider(4.69, 0, 5))
  .lpq(12)
  .orbit(2)

$BASS: n("<0!4 5 3>@3 [- 1 7 13]")
  .sound("saw")
  .scale(key)
  .distort("5:.1")
  .trans(-24)
  .lpf(800)
  .orbit(2)

// all(x=>x.postgain(slider(1, 0, 1)))
