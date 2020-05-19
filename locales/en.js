const keys = {
  general: {
    navigation: {
      knowledge_base: 'Knowledge base',
      profile: 'Profile',
      units: 'Units'
    },
    modal: {
      close: 'Close'
    }
  },
  pages: {
    course: {
      label: 'Units',
      welcome: 'Hi',
      intro: 'Welcome to this course. We want you to know the manipulative mechanisms in mobile games and social media apps. Let\'s get suprised.',
      module: 'Module'
    },
    profile: {
      label: 'Profile',
      badges: 'Badges',
      xp: 'XP'
    },
    knowledgebase: {
      label: 'Knowledge Base'
    },
    onboarding: {
      skip: 'Skip Onboarding',
      label: 'Onboarding'
    }
  }
}

export default context => {
  return new Promise(resolve => {
    resolve(keys)
  })
}
