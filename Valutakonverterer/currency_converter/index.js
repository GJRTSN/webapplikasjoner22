const prompt = require('prompt-sync')();

const translations = {
  no: {
    welcomeMessage: "Norsk (no)",
    valueMessage: "Hvilken verdi vil du konvertere?",
    currencies: {
      usd: "Amerikansk dollar",
      eur: "Euro",
      dkk: "Dansk Krone"
    },
  },

  en: {
    welcomeMessage: "English (en)",
    valueMessage: "Which currency do you want to convert?",
    currencies: {
      usd: "American dollar",
      eur: "Euro",
      dkk: "Danish Krone"
    },
  },
}

const rates = {
  dkk: 1.34,
  eur: 10,
  usd: 8
}

function getWelcomeMessage(translations) {
  let message = ""
  for(const language of Object.values(translations)) {
    message += `${language.welcomeMessage} `
  }
  return message
}


function start(translations, rates) {
  const language = prompt(getWelcomeMessage(translations));
  console.log(language)
}

start(translations, rates);