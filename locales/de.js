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
          gratulations:
            'Herzlichen Glückwunsch! Du hast {points} Punkte erhalten'
        },
        button: {
          skipButtonText: 'Überspringen',
          finished: 'Abschliessen'
        }
      },
      pages: {
        course: {
          label: 'Lerneinheiten',
          welcome: 'Hallo',
          intro:
            'Willkommen in diesem Kurs. Hier wollen wir dir die manipulativen Mechanismen in Spiele/ und Social Media Anwendungen aufzeigen. Lass dich überraschen.',
          module: 'Modul {number}',
          unit: {
            feedback: {
              text:
                'Wie findest du dieses Modul? Bitte lass eine Bewertung da!',
              vote:
                'Durchschnitt: {points} von {maxPoints} Punkten ({votes} Votes)',
              selectedRating: 'Du hast {rating} Sterne ausgewählt',
              selectRating: 'Klick um {rating} Sterne auszuwählen',
              noRating: 'Nichts ausgewählt',
              resetRating: 'Auswahl zurücksetzen',
              feedbackText: 'Lass uns ein Feedback da:'
            },
            achievement: 'Freigeschaltete Errungenschaften',
            status: {
              complete: 'Abgeschlossen',
              new: 'Neu',
              active: 'open'
            },
            modal: {
              start: 'Unit öffnen'
            },
            slides: {
              finished: 'Abgeschlossen',
              text: 'Das war es für Unit {number}. Wenn du bereit bist, kannst du das Quiz starten.',
              startQuiz: 'Starte das Quiz'
            }
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
          text:
            'Fülle die Felder aus um dich zu registrieren. Dieses ist optional und nur nötig, wenn du deine Daten und Fortschritt behalten willst.',
          register: 'Registrieren'
        },
        settings: {
          label: 'Einstellungen',
          text:
            'Hier kannst du deine Nutzerdaten und weitere Einstellungen ändern.',
          language: 'Sprache',
          english: 'Englisch',
          german: 'Deutsch',
          save: 'Speichern'
        },
        infiniteScroll: {
          label: 'Infinite Scroll'
        },
        quiz: {
          answers: 'Antworten:',
          question: 'Fragen:',
          answerChoose: 'Wähle die richtige(n) Antwort(en)!',
          check: 'Antwort Überprüfen.',
          answerCorret: 'Das ist Richtig!',
          answerWrong: 'Das ist Falsch!',
          next: 'Nächste Frage',
          steps: 'Frage {current} von {total}'
        },

        pullToRefresh: {
          label: 'Pull To Refresh',
          news: 'Neuigkeiten',
          errorLabel: 'Fehler',
          startLabel: 'Aktualisierung Starten',
          readyLabel: 'Aktualisieren',
          loadingLabel: 'Lade...'
        }
      }
    })
  })
}