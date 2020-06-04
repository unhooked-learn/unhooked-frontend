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
        },
        input: {
          email: 'Email Adresse',
          name: 'Name',
          password: 'Passwort',
          repeatPassword: 'Password wiederholen'
        },
        toast: {
          gratulations: 'Herzlichen Glückwunsch! Du hast {points} Punkte erhalten'
        },
        button: {
          skipButtonText: 'Überspringen'
        }
      },
      pages: {
        course: {
          label: 'Lerneinheiten',
          welcome: 'Hallo',
          intro: 'Willkommen in diesem Kurs. Hier wollen wir dir die manipulativen Mechanismen in Spiele/ und Social Media Anwendungen aufzeigen. Lass dich überraschen.',
          module: 'Modul {number}',
          status: {
            complete: 'Abgeschlossen',
            new: 'Neu',
            active: 'open',
          }
        },
        profile: {
          label: 'Profile',
          badges: 'Auszeichnungen',
          xp: 'Erfahrungspunkte',
          active: 'Aktiv seit {minutes} Minuten.'
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
          login: 'Einloggen',
          logout: 'Ausloggen'
        },
        register: {
          label: 'Registrierung',
          text: 'Fülle die Felder aus um dich zu registrieren. Dieses ist optional und nur nötig, wenn du deine Daten und Fortschritt behalten willst.',
          register: 'Registrieren'
        },
        settings: {
          label: 'Einstellungen',
          text: 'Hier kannst du deine Nutzerdaten und weitere Einstellungen ändern.',
          language: 'Sprache',
          english: 'Englisch',
          german: 'Deutsch',
          save: 'Speichern'
        },
        infiniteScroll: {
          label: 'Infinite Scroll'
        }
      }
    })
  })
}