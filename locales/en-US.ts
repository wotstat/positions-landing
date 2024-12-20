function url(url: string, text: string) {
  return `<a href='${url}' target='_blank'>${text}</a>`;
}

const patreonUrl = url('https://www.patreon.com/c/wotstat', 'Patreon');

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
      wait: 'Connecting game...',
      connected: 'Connected to game',
      disconnected: 'Connection terminated',
      redirectAuthWithPatreon: 'Redirecting to Patreon login',
      requestAuthWithPatreon: 'Requesting Patreon authorization',
      awaitPatreonCheck: 'Verifying authorization...',
      patreonCheckingEmail: 'Verifying email...',
      patreonCheckingToken: 'Verifying token...',
    },
    page: {
      title: 'License Activation',
      description: 'To activate your license you need a <b>license key</b> or a <b>promo code</b>.',
      keyPlaceholder: 'Enter key',
      activate: 'Activate',
      copy: 'Copy',
      goodLuck: 'Good luck in battles!',
      tryAnotherKey: 'Try another code',
      tryStartOver: 'Try again',
      buyLicense: 'Buy license key',
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
      patreon: {
        title: 'Patreon Supporter',
        description: `${url('https://www.patreon.com/c/wotstat', 'Patrons')} of any subscription level gain access to the mod license as long as their subscription is active.`,
        authWithPatreon: 'Log in with Patreon',
        denyDescription: `To activate the license, you need to grant access to your Patreon account information. Please click the <code>Allow</code> button in the authorization popup.`,
        error: `Could not verify your subscription on ${patreonUrl}.`,
        errorDescription: `This might be due to an issue with Patreon. If the problem persists after several attempts, please reach out via private messages on ${patreonUrl} or on Discord ${url('https://discord.gg/7K8W9JE6xU', '@WotStat')}.`,
        hasntMembership: 'It seems like you don’t have an active Patreon subscription.',
        hasntMembershipDescription: `To activate the license, you need an active subscription to ${patreonUrl} at any level.`,
        successDescription: `You’ve successfully activated the "WotStat Positions" mod license using your Patreon subscription. You can confirm the activation in the notification center, where you’ll see a message with your license information.<br><br>Happy gaming!`,
      }
    },
    result: {
      success: 'Your license is activated',
      expired: 'License has expired',
      promo: 'License generated',
      promoAlreadyActivated: 'Already activated',
      incorrect: 'Incorrect key',
      patreon: {
        deny: 'Access not granted',
        hasntMembership: 'No subscription found',
        error: 'Activation failed',
        success: 'Your license is now active',
      },
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