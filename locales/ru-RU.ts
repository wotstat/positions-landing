export default {
  meta: {
    title: 'Позиции от WotStat',
    description: 'Мод для World of Tanks, который показывает эффективные позиции в бою. От разработчиков сервиса WotStat',
  },
  main: {
    title: 'Мод «Позиции от WotStat»',
    description: 'Уникальные и эффективные позиции для нанесения урона в играх «World of Tanks» и «Мир Танков».\nНа основе анализа тепловых карт лучших 5% игроков на каждом танке',
  },
  activation: {
    status: {
      wait: 'Ожидание клиента',
      connected: 'Соединение установлено',
      disconnected: 'Соединение разорвано',
    }
  }
}