export default {
  meta: {
    title: 'Positions by WotStat',
    description: 'Mod for World of Tanks that shows effective positions in battle. From the developers of the WotStat service',
  },
  main: {
    title: 'Positions by WotStat',
    description: 'Unique and effective positions for dealing damage in the games "World of Tanks" and "Tank World".\nBased on the analysis of heat maps of the top 5% of players on each tank',
  },
  activation: {
    status: {
      wait: 'Waiting for client',
      connected: 'Connection established',
      disconnected: 'Connection terminated',
    },
    page: {
      title: 'License Activation',
      description: 'To activate your license you need a <b>license key</b> or a <b>promo code</b>.<br>The license key costs <b>100 rubles per month</b>. You can <a href="https://boosty.to/wotstat" target="_blank">purchase</a> a license on my Boosty.',
      keyPlaceholder: 'Enter key',
      activate: 'Activate',
      copy: 'Copy',
      goodLuck: 'Good luck in battles!',
      tryAnotherKey: 'Try another code',
      successDescription: 'You have successfully activated the WotStat Positions mod license, now you can verify successful activation in the notification center, a message with license information has been displayed<br><br>Good luck in battles!',
      expiredDescription: 'The validity of this license key has expired. You can purchase a new key',
      promoSuccessDescription: 'One-time promo key successfully activated. Be sure to save the license key, it will be required for future activations',
      promoWotLost: 'One-time promo code successfully activated, however, connection was lost with the game client during activation. <b>Repeat activation using a license key</b><br>Be sure to save the license key, it will be required for future activations',
      wotLostDescription: 'Connection with the game client has been interrupted. Try starting the activation process again. The game client must be running',
      disconnectedDescription: 'Connection with the server has been interrupted. Try starting the activation process again',
      incorrectDescription: 'Such key does not exist or its license term has already expired. Make sure you are entering the correct key.',
      promoAlreadyActivatedDescription: 'This code has already been activated previously. If you activated it before, a license key was provided to you, to reactivate you should use it',
      youTryToActivateLicense: 'You tried to activate the key:',
      youTryToActivatePromo: 'You tried to activate the promo code:',
    },
    result: {
      success: 'Your license is activated',
      expired: 'License has expired',
      promo: 'License generated',
      promoAlreadyActivated: 'Already activated',
      incorrect: 'Incorrect key',
    }
  },
  maps: {
    paris: 'Paris',
    murovanka: 'Murovanka',
    steppes: 'Steppes',
  },
  tanks: {
    grille: 'Grille 15',
    skorpionG: 'Skorpion G',
    even: 'ELC EVEN 90',
    concept: 'Concept',
    MVY: 'M-V-Y',
    '4005': 'FV4005',
    ob261: 'Obj. 261',
    conqueror: 'S. Conqueror',
    jagdPz: 'Jg.Pz. E 100',
  }
}