const keys = {
  general: {
    navigation: {
      knowledge_base: 'Knowledge base',
      profile: 'Profile',
      units: 'Units'
    }
  },
  pages: {
    profile: {
      label: 'Profile',
      badges: 'Badges',
      xp: 'XP'
    },
    onboarding: {
      skip: 'Skip Onboarding'
    }
  }
}

export default context => {
  return new Promise(resolve => {
    resolve(keys)
  })
}
