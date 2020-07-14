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
          finished: 'Abschliessen',
          register: 'Erstelle einen Account',
          guest: 'Als Gast fortfahren'
        },
        desktop: {
          label: 'Achtung',
          text: 'Diese Seite ist für eine Darstellung auf mobilen Endgeräten optimiert. Bitte nutzer dein Handy, da die Erfahrung auf dem Desktop stark abweichen kann.',
          button: 'Ausblenden'
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
          skip: 'Überspringe die Einführung',
          label: 'Einführung',
          title: 'Willst du die Ketten sprengen?',
          intro: 'Willkommen bei Unhooked, eine online E-Learning web Applikation, welche dir die manipulativen Mechanismen in Spielen und auf den sozialen Media zeigt.',
          question1: 'Wie machen es mobile Applikation das diese uns so viel Zeit kosten?',
          question2: 'Warum kleben wir jede freie Minute an unserem Handy?',
          question3: 'Wie verführen uns diese Applikation dass wir auch bei jedem Aufblinken des Handys wir zum Handy greifen und alles andere stehen und liegen lassen?', 
          question4: 'Warum können Applikation und Soziale Medien sowas, dass sie uns so in den Bann ziehen?',
          resumee: 'Diese E-Learning Anwendung adressiert genau diese Punkte und Problematiken.'
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
        guest: {
          label: 'Dein Name',
          text:
            'Gebe deinen Namen im Texfeld ein um fortzufahren.',
          login: 'Starte den Kurs'
        },
        settings: {
          label: 'Einstellungen',
          text:
            'Hier kannst du deine Nutzerdaten und weitere Einstellungen ändern.',
          language: 'Sprache',
          english: 'Englisch',
          german: 'Deutsch',
          save: 'Speichern',
          disclaimer: 'Diese Einstellung ändert nur die Beschriftungen und Kontrollelement Texte. Unit und Knowlegdebase Texte sind weiterhin in Englisch.',
          profile: {
            label: 'Profil',
            delete: 'Lösche meinen Account',
            attention: 'Achtung',
            text: 'Bist du dir sicher, dass du deinen Account löschen willst?',
            deleteButton: 'Löschen',
            onboardingRevisit:  "Die Einführung wird bei deinem nächsten Besuch angezeigt!",
            redoOnboarding:  "Einführung wiederholen",
          }
        },
        imprint: {
          label: 'Impressum',
          buttonText: 'Impressum',
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
        game: {
          label: 'Spiel',
          text: 'Klicke den Button um ein kurzes Spiel zu diesem Thema zu starten.',
          buttonText: 'Starte das Spiel',
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
