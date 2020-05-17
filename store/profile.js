export const state = () => ({
  user: 
    {
      name: 'John Doe',
      score: 0
    },
  achivements:
    [{
      name: 'First Unit',
      icon: 'dice-one',
      description: 'You have completed the first unit. Gratulations!',
      active: false
    },
    {
      name: 'Second Unit',
      icon: 'dice-two',
      description: 'You have completed the second unit.',
      active: false
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
      name: 'Like a Ghost',
      icon: 'ghost',
      description: 'Buhuhuhu!',
      active: false
    },
    {
      name: 'Gamer',
      icon: 'gamepad',
      description: '',
      active: false
    }
    ]  
})

export const getters = {
  user(state) {
    return state.user
  },
  achivements(state) {
    return state.achivements
  }
}
