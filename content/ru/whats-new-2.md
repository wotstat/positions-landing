---
title: Масштабное обновление 2.0
description: Обновление мода на позиции 2.0 – огневые рубежи, тепловые карты, новый алгоритм определения позиций и многое другое.
---

# Масштабное обновление <SvgoV2Badge class="v2-badge" />

<br/>

Обновление 2.0 мода на позиции делает его ещё более полезным и функциональным. В этом обновлении добавлено множество новых функций и улучшений, которые помогут вам стать эффективнее. За обновление не нужно доплачивать, цена лицензии остается прежней. 

## Огневые рубежи
Главным нововведением являются **огневые рубежи** ![img](/content/wn2/spotPoint.png){.spot-point-icon} – это позиции, равномерно распределённые по карте, из которых удобно вести стрельбу.
Например, если ваш фланг начинает проигрывать, то целесообразно отступать до более дальних огневых рубежей, аналогично для атаки.

- Основные огневые рубежи – отображаются оранжевыми точками на миникарте.
- Второстепенные огневые рубежи – отображаются **маленькими** оранжевыми точками при наведении курсора на миникарту.

<br/>

::div{.multi}
![img](/content/wn2/spotPointsMain.png){style="max-height: 400px"}
![img](/content/wn2/spotPointsCursor.png){style="max-height: 400px"}
::

> Отображение огневых рубежей можно изменить в настройках мода

### Направления стрельбы

Для каждого огневого рубежа может быть до пяти направлений стрельбы, они указывают на направления, в которых наиболее часто стреляют с позиции. **Данные статистические – ситуация в бою и прострелы не учитываются.**

Направления стрельбы отображаются линиями на миникарте от ближайшего к танку огневого рубежа, а также от огневого рубежа, ближайшего к курсору мыши.
Вы можете перемещать курсор мыши по миникарте и видеть, в каком направлении можно стрелять из позиций под ним.

<br/>

::div{.center}
![img](/content/wn2/spotDirections.png){style="max-height: 550px"}
::

### Маркеры направления стрельбы
По нажатию `alt`, на поле боя будут отображаться маркеры направления для ближайшего к танку огневого рубежа, если он ближе 30 метров. Это поможет вам быстро ориентироваться и заранее сводиться в нужном направлении.

<br/>

::div{.center}
![img](/content/wn2/eyeMarkers.png){style="max-height: 550px"}
::

> Пунктир визуальный, предназначен только для скриншота; в игре его нет.

> Отображение маркеров можно изменить в настройках мода, не рекомендуется выбирать `отображать постоянно`, так как маркеры будут отвлекать от прицеливания по танкам противника.

## Новые тепловые карты

Новые тепловые карты пришли на смену областям эффективности, они всё так же позволяют ориентироваться в ситуациях, когда эффективна не конкретная точка, а целая область. В отличие от старых областей эффективности, новые тепловые карты не вызывают подвисаний при отображении даже на слабых компьютерах. 


<br/>

::div{.center}
![img](/content/wn2/areaChanges.png){style="max-height: 400px"}
::

- ![img](/content/wn2/heatmapE.png){.heatmap-icon} Жёлтым цветом отображается тепловая карта **эффективных** позиций.
- ![img](/content/wn2/heatmapP.png){.heatmap-icon} Синим цветом отображается тепловая карта **популярных** позиций.

> В режимах с большими картами, такими как `Линия фронта`, на слабых компьютерах может понижаться FPS, во время отображения тепловой карты на экране, в этом случае, рекомендуется понизить `лимит на число точек` на тепловой карте в настройках мода. В обычных боях проблем быть не должно.

> Вы можете изменить отображение тепловых карт в настройках мода.  
> Например, отключить карту популярных позиций или изменить её отображение на активацию `по нажатию alt`.

## Новый алгоритм определения позиций
Старый алгоритм определения позиций в целом хорошо справлялся со своей задачей, но у него было несколько недостатков, которые исправлены в новой версии:
- новый алгоритм должен **лучше** себя показывать **на непопулярных танках и новых картах**
- новые данные в выборку теперь подгружаются **автоматически каждый день**
- на первом этапе отбора позиций используются **данные только за последний месяц**. Будет хорошо работать на популярных танках быстро актуализируясь под меняющуюся мету

<br/>

Сравнение старого и нового алгоритма:
- зелёные маркеры – новый алгоритм
- синие маркеры – старый алгоритм

::div{.center}
![img](/content/wn2/pos.png){style="max-width: 100%"}
::

<br/>

Улучшение связано с изменением порядка отбора данных: ранее сначала выбирались 5% лучших игроков, затем применялись фильтры по танку и карте. Если статист не играл на определённом танке, то и данных по этому танку нет. Теперь же, сначала применяются все необходимые фильтры, и только потом выбираются 5% лучших игроков среди этой выборки.
> При недостаточном количестве данных, критерии отбора понижаются.

## Прочие изменения
Кроме основных нововведений, в обновлении присутствует множество доработок и улучшений

### Совместимость с другими модами
Новый функционал миникарты полностью совместим с другими модами на миникарты, в том числе `XVM`.

### Альтернативный способ активации
Некоторые пользователи сталкивались с проблемой активации мода, игра не могла связаться с сервером активации, и сайт зависал на этапе `ожидание клиента`. 

Теперь, если нажать кнопку `активировать` с зажатой клавишей `alt`, то можно ввести лицензионный ключ прямо в игре, минуя сайт активации. Если вы используете файловую лицензию, можете переходить на этот способ активации.

<br/>

::div{.center}
![img](/content/wn2/alternativeActivation.png){style="max-height: 110px"}
::

### Уведомление о недоступности сервера
Теперь, при недоступности сервера, вы будете получать уведомление об этом, что позволит лучше диагностировать проблему, когда в ангаре не отображается приветственное сообщение.

<br/>

::div{.center}
![img](/content/wn2/notificationServerError.png){style="max-height: 200px"}
::

### Улучшено поведение системы защиты
Система блокировки лицензий теперь **не будет** учитывать запросы, которые пришли **подряд** с одной и той **же карты** и одного и того же **танка**, что позволит избежать ошибочной блокировки, когда провайдер дублировал запросы к серверу. Некоторые пользователи сталкивались с подобной проблемой.

**Играть одновременно с одной и той же лицензией по-прежнему нельзя.**

<br/>

::div{.multi}
![img](/content/wn2/allow.png){style="max-height: 350px"}
![img](/content/wn2/disallow.png){style="max-height: 350px"}
::

### Настройки мода адаптированы для текущей версии
Вы можете сконфигурировать мод под себя, выбрав наиболее удобные настройки. Можете по отдельности отключить весь функционал или изменить способ его отображения.

<br/>

::div{.center}
![img](/content/wn2/settings.jpg){style="max-height: 550px"}
::