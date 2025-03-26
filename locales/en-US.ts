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
      title: 'Позиции от WotStat',
      description: 'Описание',
      howToUse: 'Как использовать',
      demo: 'Демо',
      price: 'Тариф',
      instructions: 'Инструкция',
      buy: 'Купить',
      connectToDiscord: 'Присоединяйтесь к нашему Discord',
    },
    footer: {
      info: '* – лучшие игроки определяются по среднему урону за сессию из более чем 20 боёв. Если данных для построения тепловой карты недостаточно, то требуемый процент понижается (в основном это происходит на непопулярных танках)',
      connect: 'Связаться со мной вы можете по почте {email} или в сообществе Discord {discord}',
    },
    buyPopupTitle: 'Купить лицензионный ключ',
    l1: {
      title: 'Позиции от WotStat',
      description: 'Обучайтесь и играйте эффективнее с позициями от лучших игроков.',
      andMoreTanks: 'И ещё 821 танк',
      andMoreMaps: 'И ещё 40 карт',

      update2: {
        title: 'Вышло масштабное обновление',
        description: 'Добавлены огневые рубежи, обновлен алгоритм определения позиций, обновлены тепловые карты.',
        more: 'Подробнее.',
      }
    },
    l2: {
      title: 'О модификации',
      description: 'Уникальная модификация разработанная для повышения вашей эффективности в бою.',
      description2: 'Для определения позиций нанесения урона используются тепловые карты лучших игроков по каждому танку.',

      info1: {
        title: 'Позиции для каждого танка',
        description: 'Лучшие позиции определяются индивидуально для каждого танка на основе анализа данных лучших игроков.'
      },
      info2: {
        title: 'Поддержка всех карт',
        description: 'Модификация работает на всех игровых картах, постоянно обновляясь для поддержания актуальности данных.'
      },
      info3: {
        title: 'Понятный интерфейс',
        description: 'Модификация отображает понятный маркер позиции на миникарте и в 3D мире игры.'
      },
    },
    l3: {
      title: 'Как это работает',
      description: 'Из базы данных <a href="http://wotstat.info" target="_blank" rel="noopener  noreferrer">WotStat</a> выбираются 5% лучших игроков*, строится тепловая карта их урона,  отбираются наиболее популярные области, в каждой из которых, выбирается наиболее эффективная позиция.',

      updated: 'ОБНОВЛЕНО',
      new: 'НОВОЕ',
      card1: {
        title: 'Маркер наилучшей позиции',
        description: 'Наиболее эффективная позиция отображается прямо в игре крупным зелёным маркером.',
        tank: 'FV217 Badger'
      },
      card2: {
        title: 'Эффективные позиции',
        description: 'Зелёными маркерами на миникарте отображаются эффективные позиции. Крупный маркер – наилучшая позиция.',
        tank: 'Concept 5'
      },
      card3: {
        title: 'Тепловые карты',
        description: 'Иногда, оптимальным местом является не конкретная точка, а целая область на карте.',
        tank: 'FV4005',
        effective: 'Эффективные позиции',
        popular: 'Популярные позиции',
      },
      card4: {
        title: 'Огневые рубежи',
        description: 'Равномерно распределены по карте, показывают удобные для стрельбы точки и направления.',
        tank: 'Т-62А'
      },
      card5: {
        title: 'Маркеры направлений стрельбы',
        description: 'По нажатию <code>Alt</code> отображаются маркеры направлений стрельбы от ближайшего огневого рубежа.',
        tank: 'Т-62А'
      },
      card6: {
        title: 'Настройки',
        description: 'Мод можно сконфигурировать под себя, настроив отображение всех видов маркеров.'
      },
    },
    l4: {
      title: 'Инструкция',

      install: {
        title: 'Установка',
        description: 'Для установки достаточно перенести файл мода в папку с игрой.',
        steps: {
          s1: '{0} актуальную версию модификации',
          s1Download: 'Скачать',
          s2: 'Открыть лаунчер игры',
          s3: 'Нажать кнопку <code>Настройки игры</code> → <code>Показать в папке</code>',
          s4: 'Открыть папку <code>mods</code>',
          s5: 'Открыть папку с актуальной версией игры:',
          s6: 'Перенести в неё скачанный файл модификации',
        }
      },

      activation: {
        title: 'Активация',
        description: 'После входа в игру появится уведомление от модификации. Нажмите кнопку <code>активировать</code> и введите лицензионный ключ.',
        buy: 'Купить лицензию',
        cannot: 'Если у вас по каким либо причинам не получается активировать, воспользуйтесь <b>альтернативным способом активации</b>, нажмите кнопку <code>активировать</code> с зажатой клавишей <code>Alt</code>.'
      },

      usage: {
        title: 'Использование',
        description: 'После начала отсчёта, подгрузится информация о позициях для вашего танка.<br>Над миникартой будет отображаться сообщение о качестве рекомендуемых позиций вида: <code>#HHH sS mD aA eE/T</code>',
        steps: {
          s1: '<code>#HHH</code> – уникальный <code>id</code> запроса',
          s2: '<code>S</code> – итерация алгоритма понижения требований, чем меньше, тем лучше',
          s3: '<code>D</code> – порог среднего урона за бой в выборке',
          s4: '<code>A</code> – средний урон за бой в выборке',
          s5: '<code>E/T</code> – время в миллисекундах, затраченное на выполнение запроса <code>id/огневых рубежей</code>',
        }
      },

      configure: {
        title: 'Конфигурация',
        description: 'Для доступа к меню конфигурации, вам необходимо два дополнительных мода:',
        sub: 'Конфигурация является опциональным шагом, мод будет работать и без неё.',
        setting: '<code><a href="https://bitbucket.org/IzeBerg/modssettingsapi/downloads/" target="_blank" rel="noopener noreferrer">ModsSettingsAPI</a></code> – мод для отображения настроек других модов прямо в игре',
        list: '<code><a href="https://gitlab.com/wot-public-mods/mods-list/-/releases" target="_blank" rel="noopener noreferrer">Mods List</a></code> – мод для отображения списка модов в ангаре, нужен для открытия меню настроек'
      }
    },
    l5: {
      title: 'Тариф',
      monthly: 'На месяц',
      monthlyBadge: 'По цене трёх коробок',
      yearly: 'На год',
      yearlyBadge: 'Скидка 20%',
      buy: 'Перейти к покупке',
      features: {
        f1: 'Неограниченное число боёв. <span class="gray">Играйте столько, сколько хотите.</span>',
        f2: 'Любые уровни. <span class="gray">Играйте на любых уровнях с <code>I</code> до <code>XI</code>.</span>',
        f3: 'Все типы танков. <span class="gray">(кроме огнемётов). Позиции для эффективной <b>стрельбы</b> на любых типах танков. Будьте осторожны на ЛТ, настрел не является их основной задачей.</span>',
        f4: 'Любые режимы. <span class="gray"> Ограничений на режим нет, однако, в мало популярных режимах на новых танках может быть недостаточно данных. В стандартных боях данных всегда достаточно.</span>',
        f5: 'Регулярные обновления. <span class="gray"> Позиции пересчитываются каждый день, чтобы всегда быть актуальными.</span>',
        f6: 'Без ограничений. <span class="gray"> В моде нет привязки к региону, аккаунту или железу. Если у вас несколько аккаунтов или компьютеров, то одна лицензия будет работать на всех.</span>',
        f7: 'Запрещается. <span class="gray"> Нельзя передавать ключ третьим лицам. Нельзя играть с другом с одной лицензии.</span>',
      }
    },
    l6: {
      title: 'Ответы на вопросы',
    },
    l7: {
      title: 'Демонстрация работы',
      description: 'Реальная демонстрация лучше тысячи описаний.',
    }
  },
  buy: {
    description: 'Лицензионный ключ позволяет активировать лицензию мода.',
    select: 'Выберите период лицензии',
    byMonth: 'На месяц',
    byMonthBadge: 'По цене трёх коробок',
    byYear: 'На год',
    byYearBadge: 'Скидка 20%',
    selectPayment: 'Выберите способ оплаты',

    sub: 'Следуйте инструкциям платёжного сервиса. Мгновенная доставка лицензионного ключа сразу после оплаты.',
    goToPayment: 'Перейти к оплате',
    ru: {
      title: 'Из России',
      description: 'Банковские карты, СБП, SberPay, Tinkoff Pay, кошелёк ЮMoney',
    },
    crypto: {
      title: 'Криптовалютой',
      description: 'Tether USDT в сети tron (TRC-20)',
    },
    patreon: {
      title: 'Зарубежной картой',
      description: 'С помощью подписки на Patreon',
      sub: 'Лицензия доступна всем подписчикам WotStat на Patreon. Для активации установите мод и на странице активации выберите пункт "Авторизоваться через Patreon".',
      goToPayment: 'Перейти на Patreon',
    }
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