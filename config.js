const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'PINKVENOM-MD;TUck0DQJ#KgpIB34cvG9piKzB0B0PGXaIvwHfoU1rx88vBWMe5ZA',
GITHUB_TOKEN: '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',
REPO_NAME: 'durksuhhetr',
GITHUB_USER_NAME: 'TecnoDeVolper2008',

};

//In this case, you should use a Repo name that was not previously created in your Github account for the Repo name. Should Github username be used as the username of that github account and the token should also be obtained from the same github account.
//මෙහීදි ඔබ විසින් Repo name සදහා බාවිතා කළ යුත්තෙ මින් පෙර ඔබගේ Github account එක තුල නොසෑදූ Repo name එකකි. Github user name එක සදහා යොදා ගත යුත්තේද එම github account එකෙ User name එක වන අතරම token එකද ලබා ගත යුත්තෙ එම github account එකෙන්මය
