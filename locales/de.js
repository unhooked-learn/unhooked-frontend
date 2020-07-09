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
          repeatPassword: 'Password wiederholen',
          username: 'Benutzername'
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
              postRating: 'Bewertung übermitteln',
              thankYou: 'Danke für die Bewertung!'
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
              text:
                'Das war es für Unit {number}. Wenn du bereit bist, kannst du das Quiz starten.',
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
        auth: {
          or: 'Oder',
          welcomeBack:
            '<span class="font-bold">{username}</span>, willkommen zurück!',
          loginText: 'Logge dich in deinen Account ein',
          remember: 'Login speichern',
          signin: 'Einloggen',
          signup: 'Registrieren',
          logout: 'Ausloggen',
          registerText:
            'Fülle die Felder aus um dich zu registrieren. Dieses ist optional und nur nötig, wenn du deine Daten und Fortschritt behalten willst.',
          createUsername: 'Gebe dir einen Namen',
          createUser: 'Gastzugang',
          useThisUsername: 'Benutze diesen Namen und fahre fort',
          continue: 'Fortfahren'
        },
        settings: {
          label: 'Einstellungen',
          text:
            'Hier kannst du deine Nutzerdaten und weitere Einstellungen ändern.',
          language: 'Sprache',
          english: 'Englisch',
          german: 'Deutsch',
          save: 'Speichern',
          disclaimer: 'Diese Einstellung ändert nur die Beschriftungen und Kontrollelement Texte. Unit und Knowlegdebase Texte sind weiterhin in Englisch.'
        },
        imprint: {
          label: 'Impressum',
          buttonText: 'mpressum',
          provider: {
            heading: 'Dienstleister',
            according: 'According to',
            title: 'Hochschule für Technik und Wirtschaft Berlin',
            subtitle: 'Fachbereich 4',
          },
          contact: {
            heading: 'Kontakt',
          },
          sources: {
            heading: 'Quellen',
            title: 'Bildquellen und Rechte.',
            text: 'Das Logo, Banner und alle Screenshots wurden von uns selbst aufgenommen. Die Quellen der einzelnen Units sind zudem in der Wissensdatenbank (Knowledgebase) aufgeführt.',
          },
          team: {
            heading: 'Das Team',
          }
        },
        infiniteScroll: {
          label: 'Unendliches Scrollen'
        },
        quiz: {
          answers: 'Antworten:',
          question: 'Fragen:',
          answerChoose: 'Wähle die richtige(n) Antwort(en)!',
          check: 'Antwort Überprüfen.',
          answerCorret: 'Das ist Richtig!',
          answerWrong: 'Falsch oder zum Teil richtig!',
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
