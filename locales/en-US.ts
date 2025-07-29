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
    header: {
      title: 'Positions by WotStat',
      description: 'Description',
      howToUse: 'How to Use',
      demo: 'Demo',
      price: 'Pricing',
      instructions: 'Instructions',
      buy: 'Buy',
      connectToDiscord: 'Join our Discord',
    },
    footer: {
      info: '* – top players are determined by average damage per session from more than 20 battles. If insufficient data is available for generating the heatmap, the required percentage is lowered (mainly occurring with unpopular tanks)',
      connect: 'You can contact me via email {email} or through the Discord community {discord}',
    },
    buyPopupTitle: 'Purchase License Key',
    l1: {
      title: 'Positions by WotStat',
      description: 'Learn and play more effectively with positions from top players.',
      andMoreTanks: 'And 821 more tanks',
      andMoreMaps: 'And 40 more maps',

      update2: {
        title: 'Major Update Released',
        description: 'Firing Positions added, position detection algorithm updated, heatmaps updated.',
        more: 'Read more.',
      }
    },
    l2: {
      title: 'About the Mod',
      description: 'A unique modification designed to enhance your combat effectiveness.',
      description2: 'Damage-dealing positions are determined using heatmaps from the best players for each tank.',

      info1: {
        title: 'Positions for Every Tank',
        description: 'The best positions are individually identified for each tank based on top player data analysis.'
      },
      info2: {
        title: 'All Maps Supported',
        description: 'The modification works on all game maps, continuously updating to ensure data accuracy.'
      },
      info3: {
        title: 'User-Friendly Interface',
        description: 'The mod displays clear position markers on the minimap and in the 3D game world.'
      },
    },
    l3: {
      title: 'How It Works',
      description: 'From the <a href="http://wotstat.info" target="_blank" rel="noopener noreferrer">WotStat</a> database, the top 5% of players* are selected, their damage heatmap is generated, the most popular areas are identified, and the most effective position is chosen within each area.',

      updated: 'UPDATED',
      new: 'NEW',
      card1: {
        title: 'Best Position Marker',
        description: 'The most effective position is displayed directly in-game as a large green marker.',
        tank: 'FV217 Badger'
      },
      card2: {
        title: 'Effective Positions',
        description: 'Effective positions are shown as green markers on the minimap. The large marker indicates the best position.',
        tank: 'Concept 5'
      },
      card3: {
        title: 'Heatmaps',
        description: 'Sometimes, the optimal location is not a specific point but an entire area on the map.',
        tank: 'FV4005',
        effective: 'Effective positions',
        popular: 'Popular positions',
      },
      card4: {
        title: 'Firing Positions',
        description: 'Evenly distributed across the map, indicating convenient firing points and directions.',
        tank: 'T-62A'
      },
      card5: {
        title: 'Firing Direction Markers',
        description: 'Pressing <code>Alt</code> displays firing direction markers from the nearest firing positions.',
        tank: 'T-62A'
      },
      card6: {
        title: 'Settings',
        description: 'The mod can be configured to suit your preferences, adjusting the display of all marker types.'
      },
    },
    l4: {
      title: 'Instructions',

      install: {
        title: 'Installation',

        description: 'Use the WotStat web installer to easily install the mod without manual file transfers.',
        steps: {
          s1: 'On the <a href="{link}" target="_blank" rel="noopener noreferrer">Mods</a> page, select the game folder',
          s2: 'Check the checkbox for the <code>Positions</code> mod',
          s3: 'Click the <code>Install</code> or <code>Download Archive</code> button',
        },
        goToInstaller: 'Go to the installer',
        sub: 'If you encounter installation issues, please contact support at {0}',
      },

      activation: {
        title: 'Activation',
        description: 'Upon logging into the game, a mod notification will appear. Click the <code>activate</code> button and enter your license key.',
        buy: 'Purchase license',
        cannot: 'If for some reason activation fails, use the <b>alternative activation method</b>: hold the <code>Alt</code> key while clicking <code>activate</code>.'
      },

      usage: {
        title: 'Usage',
        description: 'Once the countdown begins, position information for your tank will load.<br>A message above the minimap will indicate the quality of the recommended positions in the format: <code>#HHH sS mD aA eE/T</code>',
        steps: {
          s1: '<code>#HHH</code> – unique request <code>id</code>',
          s2: '<code>S</code> – algorithm iteration of requirement reduction, the lower, the better',
          s3: '<code>D</code> – threshold for average damage per battle in selection',
          s4: '<code>A</code> – average damage per battle in selection',
          s5: '<code>E/T</code> – execution time in milliseconds for request <code>id/firing positions</code>',
        }
      },

      configure: {
        title: 'Configuration',
        description: 'To access the configuration menu, you need to install the <code>ModsSettingsAPI</code> mod, which can be found in the <a href="{link}" target="_blank" rel="noopener noreferrer">other mods</a> section.',
        sub: 'Configuration is optional; the mod will function without it.',
        goToModMenu: 'Go to the mods menu',
        clickSettings: 'Select the <code>Mods Settings</code> section',
      }
    },
    l5: {
      title: 'Pricing',
      monthly: 'Monthly',
      monthlyBadge: 'Less than 3 lootboxes',
      yearly: 'Yearly',
      yearlyBadge: '20% discount',
      buy: 'Proceed to purchase',
      features: {
        f1: 'Unlimited battles. <span class="gray">Play as much as you want.</span>',
        f2: 'All tiers. <span class="gray">Play at any tier from <code>I</code> to <code>X</code>.</span>',
        f3: 'All tank types. <span class="gray">Positions for effective <b>firing</b> for all tank types. Be careful with LT, damage dealing is not their primary role.</span>',
        f4: 'All battle modes. <span class="gray">No mode restrictions; however, data might be insufficient in less popular modes with new tanks. Standard battles always have sufficient data.</span>',
        f5: 'Regular updates. <span class="gray">Positions recalculated daily for constant accuracy.</span>',
        f6: 'No restrictions. <span class="gray">The mod isn\'t tied to regions, accounts, or hardware. One license works across multiple accounts and computers.</span>',
        f7: 'Forbidden. <span class="gray">License keys cannot be shared with third parties or used simultaneously with friends.</span>',
      }
    },
    l6: {
      title: 'FAQ',
    },
    l7: {
      title: 'Demo',
      description: 'Seeing it in action is better than a thousand descriptions.',
    }
  },
  buy: {
    description: 'A license key allows you to activate the mod license.',
    select: 'Select license period',
    byMonth: 'Monthly',
    byMonthBadge: 'Price like 3 lootboxes',
    byYear: 'Yearly',
    byYearBadge: '20% discount',
    selectPayment: 'Choose payment method',

    sub: 'Follow the payment service instructions. Instant delivery of the license key after payment.',
    goToPayment: 'Proceed to payment',
    ru: {
      title: 'From Russia',
      description: 'Bank cards, SBP, SberPay, Tinkoff Pay, YuMoney wallet',
    },
    crypto: {
      title: 'Cryptocurrency',
      description: 'Tether USDT on the Tron network (TRC-20)',
    },
    patreon: {
      title: 'International Cards',
      description: 'Using a Patreon subscription',
      sub: 'The license is available to all WotStat subscribers on Patreon. To activate, install the mod and select "Log in with Patreon" on the activation page.',
      goToPayment: 'Go to Patreon',
    }
  },
  activation: {
    status: {
      wait: 'Connecting to game...',
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
      },
      alternative: {
        // header: 'Процесс ожидания игры длится слишком долго.',
        // content: 'Попробуйте закрыть вкладку и повторить попытку.<br>Если не поможет, в уведомлении нажмите кнопку <code>Активировать</code> с зажатой клавишей <code>Alt</code> и введите лицензионный ключ прямо в игре.'
        header: 'Connection to the game is taking too long.',
        content: 'Try closing the tab and retrying.<br>If that doesn\'t work, hold <code>Alt</code> key and press the <code>Activate</code> button in the <b>notification</b> and enter the license key directly in the game.'
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