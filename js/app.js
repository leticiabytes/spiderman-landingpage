document.addEventListener('DOMContentLoaded', () => {
  let timeLine = new TimelineMax();
  
  timeLine.fromTo('.bg-loader', 1,
    { width: '100%' }, 
    { width: 0, delay: 5, ease: Expo.easeInOut },
  )
  .fromTo('.bg-video', 2, 
    { width: 0 }, 
    { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=1'
  )
  .fromTo('.logo', 0.4,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.nav-list', 0.4,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.nav-social', 0.4,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )

  for (var i = 1; i < 6; i++) {
    timeLine.fromTo(`.item-${i}`, 0.7,
      {y: -100, opacity: 0},
      {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
    )
  }
});