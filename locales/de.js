// just for testing
export default context => {
  return new Promise(resolve => {
    resolve({
      general: {
        navigation: {
          knowledge_base: 'Wissen',
          profile: 'Profil',
          units: 'Kurse'
        }
      },
      pages: {
        profile: {
          label: 'Profile',
          badges: 'Auszeichnungen',
          xp: 'Erfahrung'
        },
        onboarding: {
          skip: 'Skip Onboarding'
        }
      }
    })
  })
}
