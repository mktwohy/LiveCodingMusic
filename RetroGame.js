/*
@title Retro Game
@by Maeve Twohy
@details first song in Strudel :)
*/

setcpm(160 / 6);

const arp = n("0 3 1 4 3 2")
  .sound("sawtooth, sine")
  .chord("<Cm Cm Cm Fm>")
  .mode("above:c3")
  .voicing()
  .add(0.2)
  .adsr(".1:.1:2:.1")
  .delay(".1:.125:.5")
  .lpf(saw.range(1000, 5000).slow(4));

const arpLead = n("5 2 1 2 3 <4!3 6 7 6 8>")
  .sound("gm_synth_strings_1, sawtooth")
  .chord("<Cm Cm Cm <Cm Fm>>")
  .mode("above:c5")
  .voicing()
  .fast(2)
  .delay(".5:.125:.5")
  .room(2)
  .lpf(slider(6517, 1000, 10000));

const bassC = n("0@3 ~ <0 5>".add("<0 1 2 <4 5>>"))
  .sound("square")
  .scale("C2:minor")
  .lpf(1000);

const bassF = n("0@3 ~ <0 5>".add("<0 1 2 5>"))
  .sound("square")
  .scale("F1:minor")
  .lpf(1000);

const drums = sound("[bd [bd - bd]] rim*<1 1 2 3>, hh*<3!3 4>");

stack(
  arp.gain(slider(0.5, 0, 1)),
  arrange(
    [6, arpLead],
    [1, arpLead.rev()],
    [1, arpLead.fast("2 [4 8]").clip("1 [.5 .25]")],
  ).gain(slider(0.588, 0, 1)),
  bassC.gain(slider(0.732, 0, 1)),
  drums.gain(slider(0.758, 0, 1)),
);
