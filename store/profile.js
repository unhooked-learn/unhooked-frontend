export const state = () => ({
  user: {
    name: 'John Doe',
    score: 250000,
    registered: true,
    loggedin: false,
    timestamp: Date.now()
  },
  achievements: [
    {
      name: 'First Unit',
      icon: 'dice-one',
      description: 'You have completed the first unit. Gratulation!',
      active: true
    },
    {
      name: 'Second Unit',
      icon: 'dice-two',
      description: 'You have completed the second unit.',
      active: true
    },
    {
      name: 'Third Unit',
      icon: 'dice-three',
      description: 'You have completed the third unit.',
      active: false
    },
    {
      name: 'Four in a row',
      icon: 'dice-four',
      description: 'You have completed the first four units. Wow!',
      active: false
    },
    {
      name: 'Fiver',
      icon: 'dice-five',
      description: 'You have completed the first five units. Impressive',
      active: false
    },
    {
      name: 'Six',
      icon: 'dice-six',
      description: 'You have completed the first six units.',
      active: false
    },
    {
      name: 'First 100 Points',
      icon: 'grin',
      description: 'You have reached 100 experience points.',
      active: true
    },
    {
      name: '250 Points',
      icon: 'grin-beam',
      description: 'You have reached 250 experience points.',
      active: true
    },
    {
      name: '500',
      icon: 'laugh',
      description: 'You have reached 500 experience points.',
      active: false
    },
    {
      name: 'One K',
      icon: 'grin-stars',
      description: 'You have reached 100 experience points.',
      active: false
    },
    {
      name: '2k and more',
      icon: 'grin-squint',
      description: 'You have reached >2000 experience points.',
      active: false
    },
    {
      name: 'The devil and you',
      icon: 'grin-tongue-squint',
      description: 'You have reached 666 experience points. What a Coincidance.',
      active: false
    },
    {
      name: 'Like a Ghost',
      icon: 'ghost',
      description: 'Buhuhuhu!',
      active: true
    },
    {
      name: 'Gamer',
      icon: 'gamepad',
      description: 'You have scrolled more than 5 minutes',
      active: false
    },
    {
      name: 'Up to date',
      icon: 'newspaper',
      description: 'You refreshed more than 10 times during the Pull-to-refresh game',
      active: false
    },
    {
      name: 'Knowledge keeper',
      icon: 'brain',
      description: 'You have spend more than 10 in the Knowledgebase',
      active: false
    },
    {
      name: 'Engagement',
      icon: 'clock',
      description: 'You have spend 1 hour in this App.',
      active: false
    },
    {
      name: 'Repeat offender',
      icon: 'redo',
      description: 'You have revisited this App more than 5 times',
      active: false
    },
    {
      name: 'Easter Egg',
      icon: 'egg',
      description: 'You have found our secret easter egg. Youre smart as the dickens.',
      active: false
    },
    {
      name: 'Everything',
      icon: 'globe',
      description: 'You have unlocked every Achivement. Awesome!',
      active: false
    },
    {
      name: 'Complete',
      icon: 'check-double',
      description: 'You have successful completed this course!',
      active: false
    }
  ]
})

export const getters = {
  user(state) {
    return state.user
  },
  achievements(state) {
    return state.achievements
  }
}
