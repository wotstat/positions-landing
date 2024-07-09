---
title: Доступ к WotStat
description: Проблема с доступом к серверам WotStat
---

### Проблема с доступом к серверам WotStat

С 26 июня 2024 года некоторые провайдеры начали блокировать TLS соединения с серверами Cloudflare (это сервис используемый WotStat для защиты от DDoS атак). Поэтому некоторые пользователи могут столкнуться с проблемой доступа к серверам мода. Это выражается в отсутствии уведомления при входе в ангар.

К сожалению, решить эту проблему на стороне мода невозможно. Вам необходимо обратиться в поддержку вашего интернет провайдера (шаблон текста обращения ниже). 

#### Временное решение
Есть временное решение, которое позволит вам обойти блокировку путём использования небезопасного соединения.  
Перейдите в папку с игрой и поместите конфигурационный файл [config.cfg](config.cfg){target="_blank"} в папку:
- Для мода на позиции: `mods` → `configs` → `wotstat.positions`
- Для аналитического мода: `mods` → `configs` → `wot_stat`

#### Шаблон обращения в поддержку провайдера

> Здравствуйте,
> 
> У меня возникла проблема с доступом к серверам, находящимся за прокси-серверами Cloudflare. Пример запроса с использованием утилиты curl: curl -v [https://wotstat.info/api]
> 
> Получаю следующую ошибку:
> 
> \* schannel: disabled automatic use of client certificate  
> \* ALPN: curl offers http/1.1  
> \* Recv failure: Connection was reset  
> \* schannel: failed to receive handshake, SSL/TLS connection failed  
> \* Closing connection  
> \* schannel: shutting down SSL/TLS connection with wotstat.info port 443  
> \* Send failure: Connection was reset  
> \* schannel: failed to send close msg: Failed sending data to the peer (bytes written: -1)  
> 
> При этом, если открыть эту же ссылку в браузере, она работает корректно. Также, если использовать мобильный интернет или VPN, запросы проходят успешно. Кроме того, если использовать незащищённое соединение по протоколу HTTP, то тоже работает корректно. 
> 
> Прошу вас разобраться в ситуации и убрать возможные ограничения.
> 
> Надеюсь на быстрое решение проблемы.
> 
> С уважением,  
> [\[Ваше Имя\]]{style="color: red;"}  
> [\[Ваш Адрес Электронной Почты\]]{style="color: red;"}  

----

#### Как убедиться, что проблема именно в блокировке TLS?
Чтоб убедиться, что проблема именно в блокировке, а не в неправильной установке мода или других причинах, выполните следующие действия:
1. Откройте командную строку (нажмите `Win`+`R`, введите `cmd` и нажмите Enter).
2. Вставьте следующую команду, нажмите `Enter` и немного подождите:
   ```
   curl -v https://wotstat.info/api
   ```  
   *Эта команда попытается установить соединение с сервером WotStat и вывести его статус*
3. Если соединиться с сервером **удалось**, вы увидите сообщение заканчивающиеся на:
   ```
   ...
   {"status":"online","time":"2024-07-09T22:16:54.389Z","version":"1.1.0"}
   ```
   В случае **неудачи**, вы получите сообщение об ошибке, похожее на:
   ```
    * schannel: disabled automatic use of client certificate
    * ALPN: curl offers http/1.1
    * Recv failure: Connection was reset
    * schannel: failed to receive handshake, SSL/TLS connection failed
    * Closing connection
    * schannel: shutting down SSL/TLS connection with wotstat.info port 443
    * Send failure: Connection was reset
    * schannel: failed to send close msg: Failed sending data to the peer (bytes written: -1)
    ```

Если через командную строку соединение с сервером устанавливается, значит проблема в чём то другом. 
