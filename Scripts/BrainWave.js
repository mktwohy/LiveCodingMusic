/*
@title Brain Wave
@by Maeve Twohy
*/

setcpm(150/5)

const drone = note("<[g3, b3]!3 [f#3, e3]>")
  // .sound("sawtooth")
  .lpf(slider(10000, 0, 10_000))
  .adsr(".1:.25:1:.5")

const poly = stack(
  "e4 d4",
  "g3 b3 b4",
  // "a3 b3 b4 e5 e4"
).note()
  // .sound("triangle")
  // .transpose("P5")

const fastPoly = polymeter(
  "e4 d4",
  "g3 b3 b4",
  "a3 b3 b4 e5 e4"
).note()
  // .sound("saw")
  .transpose("12")
  .slow(2)
  .clip(.9)
  // .delay(".5:.125:.5")

const bass = note("<<b1 e1> [g1@2 d1]>")
  .sound("gm_acoustic_bass")
  // .sound("square")

const drums = stack(
  cat(
    s("[bd] [lt - [lt, mt]] [bd rim sd]"),
    s("[bd] - [mt - rim]")
  ),
  // s("hh!3")
)

const hhAccents = [
  ".2",
  "[.5 .2 .2 .2]*5",
  "[.7 .2 .7 .5]*5",
  "[1 .2 1 .7 .2]*4",
]

const drumsFast = stack(
  s("bd*5")
    .bank("AkaiLinn"),
  // s("rim - [- rim] - [- rim - rim]"),
  // s("rim rim [- sd] - [- rim sd sd]"),
  // s("hh*20")
  //   .lpf(slider(5450, 0, 10_000))
  //   .velocity(hhAccents[0])
  //   .bank("AkaiLinn"),
)

stack(
  drone.gain(.5),
  // poly,
  // fastPoly.gain(slider(0.3, 0, 1)),
  // bass.gain(1.5),
  drums,
  // drumsFast
).postgain(slider(1, 0, 1))
