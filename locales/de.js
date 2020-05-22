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
        },
        login: {
          text: 'Logge dich in deinen Account ein',
          remember: 'Login speichern',
          register: 'Registrieren',
          login: 'Einloggen'
        },
        register: {
          label: 'Registrierung',
          text: 'Fülle die Felder aus um dich zu registrieren',
          email: 'Email Adresse',
          name: 'Name',
          password: 'Passwort',
          repeatPassword: 'Password wiederholen',
          register: 'Registrieren'
        },
        settings: {
          label: 'Einstellungen',
          text: 'Hier kannst du deine Nutzerdaten und weitere Einstellungen ändern.',
          email: 'Email Adresse',
          name: 'Name',
          password: 'Passwort',
          repeatPassword: 'Passwort wiederholen',
          language: 'Sprache',
          english: 'Englisch',
          german: 'Deutsch',
          save: 'Speichern'
        }
      }
    })
  })
}
