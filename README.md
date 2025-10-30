# MA1805-portfolio
Four p5.js mini artworks: rave/ bass/ forest/ glitch theme.

[01.drawing] (01.drawing/index.html)


# 1. Drawing- "Forest Speaker"
  What it is: 
  Green wobbling circles like sub-woofer cones in the dark. I wanted an emoji for the moment the bass drops in a woodland rave.

  How I made it: 
  I kept the palette strictly forest green by using RGB (0,255,150) and the canvas midnight- dark (10,15,20) so the hue feels bioluminescent. Random +- 3 px shakes at 15ps gives the cones a nervous, animal twitch, the typo I made in "ellipse" became a deliberate glitch, a snapped branch in undergrowth, which I fixed after. 

  Why this choice: 
  I wanted an emoji that captures something hard to draw, the moment the bass drops in the forest. I turned three circles into trembling sub-woofers, proving that raw coordinates can evoke place and memory.

# 2. Movement- - "Orbit Raver" 
What it is: Eight neon dots glide in slow motion around an invisible centre, hues washing from green to pink. No bass this time, just the afterglow of a rave that's winding down.

How I made it: createCanvas, translate to centre, then a single for loop that clones the dot 8 times. Each frame adds a tiny angle (0.004) so the dots move a little bit, and the hues change to the next shade. Near the beginning, I made a small mistake: the trig parts sat outside draw() and appeared as "not defined", so I fixed that error.

Why this choice:
I wanted movement that feels tired but still moving, like dancers orbiting the floor at 3AM. The looped maths becomes choreography and the slow colour shift becomes the last lights fading in the ceiling. I was inspired by the immersive festival Boomtown where "pastel fabrics danced in the wind, just as we did" (Broke Magazine, 2024). I wanted to incorporate a moment of collective freedom by translating this into eight HSB orbs.


6. ddfdr

# References 

Broke Magazine. (2024). Boomtown 2024: Five Days in an Alternate Reality: https://brokemagazine.co.uk/boomtown-2024-five-days-in-an-alternate-reality/
