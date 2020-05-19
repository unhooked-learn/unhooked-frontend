// just for testing
export default context => {
  return new Promise(resolve => {
    resolve({
      general: {
        navigation: {
          knowledge_base: 'Wissen',
          profile: 'Profil',
          units: 'Kurse'
        },
        modal: {
          close: 'Schließen'
        }
      },
      pages: {
        course: {
          label: 'Lerneinheiten',
          welcome: 'Hallo',
          intro: 'Willkommen in diesem Kurs. Hier wollen wir dir die manipulativen Mechanismen in Spiele/ und Social Media Anwendungen aufzeigen. Lass dich überraschen.',
          module: 'Modul'
        },
        profile: {
          label: 'Profile',
          badges: 'Auszeichnungen',
          xp: 'Erfahrung'
        },
        knowledgebase: {
          label: 'Wissensdatenbank'
        },
        onboarding: {
          skip: 'Skip Onboarding',
          label: 'Einführung'
        }
      }
    })
  })
}
