const keys = {
  general: {
    navigation: {
      knowledge_base: 'Knowledge base',
      profile: 'Profile',
      units: 'Units'
    },
    modal: {
      close: 'Close'
    },
    input: {
      email: 'Email address',
      name: 'Name',
      password: 'Password',
      repeatPassword: 'repeat Password',
    },
    toast: {
      gratulations: 'Gratulations! You have earned ',
      type: ' Points',
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
    },
    login: {
      text: 'Sign in to your account',
      remember: 'Remember me',
      register: 'Register',
      login: 'Login',
      logout: 'Logout'
    },
    register: {
      label: 'Registration',
      text: 'Fill in to your register your account. This feature is optional and only nessasary if you want to keep your data and progress.',
      register: 'Sign Up'
    },
    settings: {
      label: 'Settings',
      text: 'Here you can change your account data',
      language: 'Language',
      english: 'English',
      german: 'German',
      save: 'Save'
    }
  }
}

export default context => {
  return new Promise(resolve => {
    resolve(keys)
  })
}
