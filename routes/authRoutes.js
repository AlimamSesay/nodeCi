const passport = require('passport');

module.exports = app => {
  app.get('/login', (req, res) => {
    const id = '5b7fe607ed051e29dfa73cd9';

    const Buffer = require('safe-buffer').Buffer;
    const sessionObject = {
        passport: {
            user: id
        }
    };

    const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString('base64');
    const Keygrip = require('keygrip');
    const keys = require('../config/keys');
    const keygrip = new Keygrip([keys.cookieKey]);
    const sig = keygrip.sign('session=' + sessionString);
    console.log(sessionString, sig);
    req.cookie = 'adfa'

    // await page.setCookie({name: 'session', value: sessionString});
    // await page.setCookie({name: 'session.sig', value: sig});

    res.redirect('/');
  });
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/blogs');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
