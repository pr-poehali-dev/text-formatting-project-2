import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const messengers = [
  {
    name: "Telegram",
    icon: "Send",
    url: "https://t.me/your_username",
    color: "bg-[#2AABEE] hover:bg-[#229ED9]",
  },
  {
    name: "WhatsApp",
    icon: "MessageCircle",
    url: "https://wa.me/79001234567",
    color: "bg-[#25D366] hover:bg-[#1DA851]",
  },
  {
    name: "VK Мессенджер",
    icon: "Mail",
    url: "https://vk.me/your_id",
    color: "bg-[#0077FF] hover:bg-[#0066DD]",
  },
];

const MessengerDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle className="font-serif text-xl text-center">
          Выберите мессенджер
        </DialogTitle>
        <DialogDescription className="text-center">
          Мы ответим в течение часа в рабочее время
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 pt-2">
        {messengers.map((m) => (
          <a
            key={m.name}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${m.color} text-white rounded-lg px-6 py-4 flex items-center gap-3 font-sans font-medium text-base transition-colors`}
          >
            <Icon name={m.icon} className="w-5 h-5" />
            {m.name}
          </a>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

const CTAButton = () => {
  const [messengerOpen, setMessengerOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-10">
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6 h-auto font-sans font-semibold tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <Icon name="ArrowRight" className="mr-2 w-5 h-5" />
          Записаться на стратегическую сессию
        </Button>
        <Button
          variant="outline"
          className="text-base px-8 py-6 h-auto font-sans font-medium tracking-wide rounded-lg border-2 transition-all duration-300"
          size="lg"
          onClick={() => setMessengerOpen(true)}
        >
          <Icon name="MessageSquare" className="mr-2 w-5 h-5" />
          Написать в мессенджер
        </Button>
      </div>
      <MessengerDialog open={messengerOpen} onOpenChange={setMessengerOpen} />
    </>
  );
};

const Divider = () => (
  <div className="article-container py-2">
    <hr className="border-border" />
  </div>
);

const Index = () => {
  return (
    <article className="bg-background text-foreground min-h-screen pb-24">
      {/* ===== BLOCK Q — HERO ===== */}
      <section className="pt-24 pb-16 animate-fade-up">
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground mb-8">
            Ваша стройка работает без остановки. Гарантируем.
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-[640px] mx-auto leading-relaxed">
            Пока обычные бухгалтеры разгребают последствия блокировок и штрафов,
            мы устраняем их причины. Специализированная бухгалтерия для
            строительных компаний с оборотом от 100 млн рублей.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== QUALIFICATION ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Эта страница для вас, если:
          </h2>
          <ul className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы владелец или генеральный директор строительной компании в
                Москве или области
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Ваш оборот от 100 до 300 млн рублей, и вы работаете с НДС
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы устали узнавать о налоговых платежах в последний момент, а о
                проблемах — когда уже поздно
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы хотите сосредоточиться на объектах и тендерах, а не на
                бесконечных требованиях из налоговой
              </span>
            </li>
          </ul>
        </div>
      </section>

      <Divider />

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>Давайте честно.</p>

          <p>
            Вы не для того строили бизнес, чтобы каждый месяц гадать:
            заблокируют счёт или пронесёт. Не для того, чтобы в три часа ночи
            просыпаться с мыслью: «А точно ли бухгалтер сдал этот отчёт?»
          </p>

          <p>
            И уж точно не для того, чтобы однажды утром услышать от прораба:
            «Бетон не везут. Счёт заморожен».
          </p>

          <p>
            Но именно так работает большинство строительных компаний. Не потому
            что владельцы глупые или бухгалтеры плохие. А потому что сам подход
            устарел.
          </p>

          <p>
            Этот подход называется «реактивная бухгалтерия» — когда бухгалтер
            просто фиксирует то, что уже произошло. Сначала проблема, потом —
            попытка её решить. Сначала блокировка, потом — беготня по банкам.
            Сначала штраф, потом — объяснительные.
          </p>

          <p>В обычном бизнесе это неприятно. В строительстве — катастрофа.</p>

          <p>
            Потому что когда встаёт стройка, каждый день простоя обходится в
            сотни тысяч рублей. Техника стоит, люди ждут, заказчик нервничает,
            субподрядчики разбегаются. А вы платите неустойку и теряете
            репутацию, которую выстраивали годами.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== INTRIGUE / SOLUTION INTRO ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>Но что если бы существовал другой подход?</p>

          <p>
            Что если бы ваша бухгалтерия работала не как пожарная команда,
            которая приезжает на пепелище, а как система раннего оповещения,
            которая не даёт пожару начаться?
          </p>

          <p>
            Именно для этого мы создали «Протокол Анти-Блок» — систему
            проактивной финансовой защиты, разработанную специально для
            строительного бизнеса.
          </p>

          <p>
            Её суть проста: мы видим риски раньше, чем они превращаются в
            проблемы. И устраняем их до того, как вы о них узнаете.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== FIRST SKEPTICISM ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Возможно, вы уже обожглись на аутсорсерах. Слышали красивые
            обещания, а потом получали стандартные отписки и нулевое понимание
            специфики стройки.
          </p>

          <p>
            Мы это знаем. Потому что к нам часто приходят именно после такого
            опыта.
          </p>

          <p>
            Разница в том, что мы не универсальная бухгалтерия, которая берёт
            всех подряд. Мы работаем только со строительными компаниями. И за 11
            лет изучили эту нишу так глубоко, что видим «красные флаги» там, где
            обычный бухгалтер даже не догадывается смотреть.
          </p>

          <p>
            КС-2, КС-3, сложные цепочки НДС, специфика работы с генподрядчиками
            и субподрядчиками — для нас это не экзотика, а ежедневная рутина.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== TRANSITION ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Но прежде чем рассказать, как именно работает наша система, давайте
            убедимся, что мы понимаем вашу ситуацию.
          </p>

          <p>
            Потому что если хотя бы половина из того, что написано ниже, про
            вас — значит, мы точно сможем помочь.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== BLOCK U — SITUATION ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>Представьте обычный понедельник.</p>

          <p>
            Вы едете на объект, в голове — переговоры с заказчиком, сроки сдачи
            этапа, вопросы по субподрядчикам. Обычная рабочая загрузка.
          </p>

          <p>И тут звонок от прораба.</p>

          <p className="italic text-muted-foreground">
            «Бетон не привезли. Говорят, оплата не прошла».
          </p>

          <p>
            Вы набираете бухгалтера. Гудки. Ещё раз. Не берёт. Перезванивает
            через час: «Я не знаю, что случилось, сейчас разберусь...»
          </p>

          <p>А вы уже понимаете: счёт заблокирован.</p>

          <p>
            Дальше — как в тумане. Звонки в банк, невнятные объяснения про
            «комплаенс» и «подозрительные операции». Техника стоит. Люди ждут и
            нервничают. Заказчик требует объяснений. Субподрядчик намекает на
            неустойку.
          </p>

          <p>
            И вы — человек, который построил этот бизнес своими руками —
            чувствуете себя абсолютно беспомощным. Потому что от вас сейчас
            ничего не зависит.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== SYMPTOMS CHECKLIST ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Узнаёте себя хотя бы в чём-то из этого?
          </h2>
          <ul className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                О налоговых платежах вы узнаёте в последний день, когда уже
                поздно что-то оптимизировать
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Требования из налоговой приходят регулярно, и каждый раз это
                стресс и непонятки
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы подписываете стопки документов не глядя, потому что
                разбираться некогда, а бухгалтеру вроде доверяете
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Где-то в глубине души вы подозреваете, что переплачиваете по
                налогам, но не понимаете где именно
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы зависите от одного человека: заболел, ушёл в отпуск,
                уволился — и всё встало
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground shrink-0">&mdash;</span>
              <span>
                Вы не помните, когда последний раз спокойно уехали в отпуск, не
                думая о том, что там происходит с бухгалтерией
              </span>
            </li>
          </ul>

          <p className="mt-10 font-sans text-base md:text-lg leading-relaxed text-foreground">
            Если хотя бы два пункта про вас — значит, вы живёте в режиме
            «реактивной бухгалтерии». И это не ваша вина.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== BLAME REMOVAL ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Это не потому, что вы плохой руководитель. И не потому, что ваш
            бухгалтер — бездарь.
          </p>

          <p>Просто сама система выстроена неправильно.</p>

          <p>
            Большинство бухгалтеров — даже хороших, даже опытных — работают по
            одной и той же схеме: дождаться события, зафиксировать его,
            отчитаться. Это и есть «посмертный учёт». Сначала что-то случилось,
            потом мы это записали.
          </p>

          <p>
            В обычном бизнесе такой подход худо-бедно работает. Но
            строительство — это не обычный бизнес.
          </p>

          <p>
            Здесь сложный НДС с длинными цепочками контрагентов. Здесь КС-2 и
            КС-3, в которых легко ошибиться. Здесь банки смотрят на каждый
            крупный платёж субподрядчику как на потенциальное отмывание денег.
            Здесь налоговая выставляет требования, на которые нужно отвечать не
            «когда-нибудь», а вчера.
          </p>

          <p>
            И здесь один день простоя стоит столько, сколько обычный бизнес
            зарабатывает за месяц.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== MARIA'S STORY ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Мы работаем со строительными компаниями 11 лет. Видели изнутри, как
            срываются объекты из-за заблокированных счетов. Как теряются миллионы
            из-за ошибок в документообороте. Как кассовые разрывы, которые можно
            было предсказать за два месяца, ставят бизнес на колени.
          </p>

          <p>
            И видели, как всего этого можно избежать. Если перестать работать «по
            факту» и начать работать на опережение.
          </p>

          <p>
            Именно поэтому мы выстроили систему, которая работает по другим
            правилам. Правила простые: не тушить пожары, а не давать им начаться.
          </p>

          <p>
            Сейчас расскажу, как именно это работает и почему обычная
            бухгалтерия — даже очень старательная — в принципе не способна вас
            защитить.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== BLOCK E — ATTACK ON OLD PARADIGM ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-10 text-foreground leading-snug">
            Почему ваш бухгалтер не виноват в том, что вы постоянно на нервах?
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>Потому что его так учили.</p>

            <p>
              Вся классическая бухгалтерия построена на одном принципе: сначала
              событие — потом учёт. Произошла сделка — записали. Пришло
              требование — ответили. Начислили штраф — заплатили.
            </p>

            <p>
              Это как лечить болезнь, когда человек уже в реанимации. Формально
              врач всё делает правильно. Но пациенту от этого не легче.
            </p>

            <p>
              В строительстве такой подход — прямая дорога к катастрофе.
            </p>

            <p>И вот почему.</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== CONSTRUCTION SPECIFICS ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h3 className="font-serif text-xl md:text-2xl mb-10 text-foreground">
            Строительный бизнес устроен не так, как остальные.
          </h3>

          <div className="space-y-10">
            {/* Sub-section 1 */}
            <div className="border-l-2 border-accent/40 pl-6 space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
              <p className="font-semibold">Во-первых, сложный НДС.</p>
              <p>
                У вас десятки контрагентов: генподрядчики, субподрядчики,
                поставщики материалов. Каждый из них — звено в цепочке НДС. Если
                хоть одно звено окажется «проблемным» — налоговая придёт к вам.
                Не к нему. К вам.
              </p>
              <p>
                Обычный бухгалтер видит это, когда требование уже лежит на
                столе. Мы видим это в момент, когда вы только собираетесь
                подписать договор.
              </p>
            </div>

            {/* Sub-section 2 */}
            <div className="border-l-2 border-accent/40 pl-6 space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
              <p className="font-semibold">
                Во-вторых, специфика документооборота.
              </p>
              <p>
                КС-2, КС-3, акты скрытых работ, исполнительная документация.
                Ошибка в дате, неправильная формулировка, несоответствие
                объёмов — и у вас проблемы с заказчиком, с налоговой или с обоими
                сразу.
              </p>
              <p>
                Обычный бухгалтер часто вообще не понимает, что такое КС-2. Для
                него это просто «какая-то строительная бумажка». Для нас — это
                документ, который может стоить вам миллионы.
              </p>
            </div>

            {/* Sub-section 3 */}
            <div className="border-l-2 border-accent/40 pl-6 space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
              <p className="font-semibold">
                В-третьих, пристальное внимание банков.
              </p>
              <p>
                Строительство — в зоне риска по 115-ФЗ. Крупные платежи
                субподрядчикам, переводы на ИП, нетипичные операции — всё это
                банк рассматривает через лупу. Один неосторожный платёж без
                правильного обоснования, и счёт заморожен. Без предупреждения.
                Без объяснений.
              </p>
              <p>
                Обычный бухгалтер узнаёт об этом, когда вы звоните ему в панике.
                Мы узнаём об этом до того, как вы нажали кнопку «отправить
                платёж».
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== CASH GAP ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Но есть ещё одна ловушка, о которой не говорят вслух.
          </p>

          <p className="font-serif text-xl md:text-2xl text-foreground">
            Кассовые разрывы.
          </p>

          <p>
            Ситуация знакомая: компания прибыльная, контракты есть, работа
            кипит. А денег на счёте — ноль. Потому что заказчики платят не
            постепенно, а большими траншами после сдачи этапов.
          </p>

          <p>
            В итоге получается абсурд: на бумаге вы в плюсе, а в реальности не
            можете заплатить за бетон, выдать зарплату бригаде или рассчитаться с
            субподрядчиком.
          </p>

          <p>
            Что дальше? Штрафы, пени, испорченные отношения с поставщиками,
            увольнения ключевых людей. И репутация, которую вы строили годами,
            рушится за несколько недель.
          </p>

          <p>
            Обычный бухгалтер скажет вам об этом, когда деньги уже закончились.
            Мы скажем за два месяца до того, как это случится.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== NEW PARADIGM ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>Всё это можно предотвратить.</p>

          <p>
            Не героическими усилиями в последний момент. Не переработками и
            бессонными ночами. А системой, которая работает на опережение.
          </p>

          <p className="font-semibold">
            Мы называем это проактивной бухгалтерией.
          </p>

          <p>
            Суть простая: вместо того чтобы фиксировать прошлое, мы управляем
            будущим.
          </p>

          <p>
            Вместо того чтобы ждать требования из налоговой, мы отслеживаем
            показатели, которые это требование вызывают, и корректируем их
            заранее.
          </p>

          <p>
            Вместо того чтобы узнавать о блокировке счёта от прораба, мы видим
            «красные флаги» в банковских алгоритмах и обходим их до того, как они
            сработают.
          </p>

          <p>
            Вместо того чтобы разгребать кассовый разрыв, мы строим платёжный
            календарь и структурируем договоры так, чтобы деньги приходили
            равномерно.
          </p>
        </div>
      </section>

      <Divider />

      {/* ===== SYSTEM INTRO ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Именно на этих принципах построена наша система «Протокол Анти-Блок».
          </p>

          <p>
            Это не просто набор бухгалтерских услуг. Это четырёхуровневая
            система защиты, которая закрывает все критические точки, где
            строительный бизнес обычно теряет деньги, время и нервы.
          </p>

          <p>
            Каждый уровень решает конкретную задачу. Вместе они создают периметр
            безопасности, который делает блокировку вашего счёта практически
            невозможной.
          </p>

          <p>Сейчас покажу, как это устроено.</p>
        </div>
      </section>

      <Divider />

      {/* ===== BLOCK S — SYSTEM ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-3xl md:text-4xl mb-16 text-foreground text-center leading-snug">
            Система «Протокол Анти-Блок»: как это работает
          </h2>

          <div className="space-y-12">
            {/* Level 1 */}
            <div className="bg-card rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
                  <span className="font-serif text-xl text-accent font-bold">
                    1
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Shield"
                    className="w-6 h-6 text-accent shrink-0"
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">
                    Ежедневный Мониторинг Рисков Блокировки
                  </h3>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground pl-0 md:pl-[68px]">
                <p>Это ядро всей системы.</p>
                <p>
                  Каждый день мы отслеживаем ключевые показатели, на которые
                  смотрят банки и налоговая, когда решают, заблокировать вам счёт
                  или нет.
                </p>
                <p>
                  Уровень налоговой нагрузки. Соотношение входящего и исходящего
                  НДС. «Подозрительные» с точки зрения 115-ФЗ операции. Разрывы
                  в цепочках контрагентов.
                </p>
                <p>
                  Но мы не просто смотрим на цифры. Мы даём вам конкретные
                  рекомендации.
                </p>
                <p>
                  Не сухой отчёт на десять страниц, который непонятно как читать.
                  А простое сообщение: «В этом месяце рекомендуем увеличить
                  налоговый платёж на 80 000 рублей, чтобы не вызвать вопросов у
                  ФНС» или «Этот платёж субподрядчику лучше разбить на два и
                  провести с интервалом в неделю».
                </p>
                <p>Вы получаете не проблемы, а готовые решения.</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-card rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
                  <span className="font-serif text-xl text-accent font-bold">
                    2
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="FileCheck"
                    className="w-6 h-6 text-accent shrink-0"
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">
                    Щит для Ключевых Сделок
                  </h3>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground pl-0 md:pl-[68px]">
                <p>
                  Вы работаете с десятками контрагентов. Субподрядчики,
                  поставщики, арендодатели техники. Каждый из них — потенциальный
                  риск.
                </p>
                <p>
                  Не потому что они мошенники. А потому что налоговая может
                  решить, что они «недобросовестные». И тогда проблемы будут у
                  вас.
                </p>
                <p>
                  Мы формируем досье должной осмотрительности по каждой значимой
                  сделке. Проверяем контрагента до того, как вы подпишете
                  договор. Собираем документы, которые защитят вас, если
                  налоговая начнёт задавать вопросы через год или два.
                </p>
                <p>
                  Это значит, что даже самый выгодный контракт не станет миной
                  замедленного действия, которая взорвётся в самый неподходящий
                  момент.
                </p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-card rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
                  <span className="font-serif text-xl text-accent font-bold">
                    3
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CalendarCheck"
                    className="w-6 h-6 text-accent shrink-0"
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">
                    Центр Управления «Спокойствие»
                  </h3>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground pl-0 md:pl-[68px]">
                <p>
                  Сколько отчётов должна сдать ваша компания за год? Десятки.
                  НДС, налог на прибыль, имущество, НДФЛ, взносы, статистика,
                  экология...
                </p>
                <p>
                  Пропустить срок — штраф. Сдать с ошибкой — требование и
                  проверка. Забыть про какой-то мелкий отчёт — блокировка счёта.
                </p>
                <p>
                  Вы получаете доступ к нашему облачному календарю, где отражены
                  все дедлайны по вашей компании. В реальном времени. С
                  уведомлениями.
                </p>
                <p>
                  Но главное — вам не нужно туда смотреть. Потому что мы сами
                  следим за каждым сроком и сдаём всё вовремя. Календарь нужен
                  для вашего спокойствия, а не для вашей работы.
                </p>
                <p>
                  Вы просто знаете, что всё под контролем. И можете спокойно
                  заниматься стройкой.
                </p>
              </div>
            </div>

            {/* Level 4 */}
            <div className="bg-card rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
                  <span className="font-serif text-xl text-accent font-bold">
                    4
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Radar"
                    className="w-6 h-6 text-accent shrink-0"
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">
                    Финансовый Периметр
                  </h3>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground pl-0 md:pl-[68px]">
                <p>
                  Иногда угроза приходит не от налоговой и не от банка. А от
                  контрагента, который решил подать на вас в суд. Или от
                  проверки, о которой вы узнаёте последним.
                </p>
                <p>Мы берём под контроль ваш информационный фон.</p>
                <p>
                  Мониторим базы судебных дел, реестры проверок, публикации о
                  вашей компании. Если где-то появляется сигнал, вы узнаёте об
                  этом мгновенно.
                </p>
                <p>
                  Не через месяц, когда иск уже в суде. Не через неделю, когда
                  проверка уже на пороге. А сразу, в момент появления информации.
                </p>
                <p>
                  Это даёт вам то, чего нет у большинства предпринимателей: время
                  на подготовку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== CASE STUDY ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            История компании «СтройМонтаж»
          </h2>

          <div className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground mb-10">
            <p>
              Алексей, владелец строительной компании с оборотом 180 млн рублей,
              пришёл к нам после того, как его счёт заблокировали на 4 дня.
            </p>

            <p>
              Причина блокировки — крупный платёж субподрядчику, который банк
              посчитал «подозрительным». Не было правильного обоснования, не было
              досье на контрагента, не было ничего, что могло бы быстро снять
              вопросы.
            </p>

            <p>
              За эти 4 дня компания потеряла около 1,7 млн рублей. Простой
              техники, срыв поставки бетона, неустойка заказчику. Плюс нервы,
              бессонные ночи и ощущение полной беспомощности.
            </p>

            <p>
              Алексей сказал тогда: «Я понял, что больше так не могу. Мне нужна
              не бухгалтерия, а защита».
            </p>
          </div>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>
              Прошло 11 месяцев с момента, как мы начали работать вместе.
            </p>

            <p className="font-semibold">Результаты:</p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>Ноль блокировок счёта</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Экономия 940 000 рублей на оптимизации НДС через правильное
                  структурирование сделок
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Камеральная проверка пройдена без единого штрафа
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Платёжный календарь, который предотвратил два потенциальных
                  кассовых разрыва
                </span>
              </li>
            </ul>

            <blockquote className="border-l-4 border-accent/50 pl-6 py-2 my-8 italic text-muted-foreground">
              Недавно Алексей написал нам: «Впервые за 7 лет я не думаю о
              бухгалтерии вообще. Просто получаю уведомления, что всё сделано.
              Это бесценно».
            </blockquote>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== EXPERT SECTION ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            Кто за этим стоит
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>
              Меня зовут Мария, и я создала «Ваш персональный бухгалтер» 11 лет
              назад.
            </p>

            <p>
              До этого я 26 лет работала главным бухгалтером. Прошла через
              Новороссийский морской торговый порт, строительство крупных торговых
              центров, олимпийские объекты в Сочи.
            </p>

            <p>
              Я видела изнутри, как работают большие строительные проекты. И
              видела, как они разваливаются из-за бухгалтерских ошибок, которых
              можно было избежать.
            </p>

            <p>Сегодня у меня:</p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon
                  name="Award"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Два высших образования: бухгалтерское и юридическое
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Award"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Членство в Палате налоговых консультантов Москвы
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Award"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Действующая судебная практика по налоговым спорам
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Award"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>Статус партнёра 1С</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Award"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                />
                <span>
                  Опыт преподавания на курсах для главных бухгалтеров
                </span>
              </li>
            </ul>

            <p>
              Но главное — я собрала команду, которая работает по тем же
              принципам. Не «сдать отчёт и забыть», а «защитить бизнес клиента».
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== BONUSES ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-14">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            Что вы получаете дополнительно
          </h2>

          {/* Bonus 1 */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-6 text-foreground">
              Бонус №1: Пакет «Юридический Щит»
            </h3>
            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
              <p>
                Доступ к нашему юридическому отделу для консультаций по
                договорам, претензиям и оценке судебных перспектив.
              </p>
              <p>
                Не нужно искать юриста на стороне и объяснять ему специфику
                вашего бизнеса. Наши юристы уже в теме, потому что работают с
                вашими документами каждый день.
              </p>
              <p>
                Рыночная стоимость таких консультаций — от 15 000 рублей в месяц.
              </p>
              <p className="font-semibold">Для вас — включено в пакет.</p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl mb-6 text-foreground">
              Бонус №2: Сервис «Зелёный Свет для Этапа»
            </h3>
            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
              <p>
                Перед началом работ по каждому этапу мы проверяем поступление
                средств и даём вам официальное подтверждение: «Финансирование
                подтверждено. Можно начинать».
              </p>
              <p>
                Это ваша страховка от ситуации, когда вы запустили работы,
                потратили деньги на материалы и бригаду, а оплата от заказчика
                так и не пришла.
              </p>
              <p>
                Простая проверка, которая экономит сотни тысяч рублей и тонны
                нервов.
              </p>
              <p>Ценность — 15 000 рублей в месяц.</p>
              <p className="font-semibold">Для вас — включено в пакет.</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== GUARANTEES ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Тройная железная гарантия
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground mb-12">
            <p>
              Мы понимаем: вы уже обжигались. На бухгалтерах, которые обещали и
              не делали. На аутсорсерах, которые исчезали в момент проблем.
            </p>
            <p>Поэтому мы даём не одну, а три гарантии.</p>
          </div>

          <div className="space-y-10">
            <div className="border-l-2 border-accent/40 pl-6">
              <h4 className="font-serif text-lg md:text-xl mb-3 text-foreground">
                Гарантия №1: Защита от блокировки
              </h4>
              <p className="font-sans text-base md:text-lg leading-relaxed text-foreground">
                Если ваш счёт будет заблокирован по нашей вине — из-за
                несданной вовремя отчётности или некорректного ответа на
                требование — следующий месяц обслуживания полностью за наш счёт.
              </p>
            </div>

            <div className="border-l-2 border-accent/40 pl-6">
              <h4 className="font-serif text-lg md:text-xl mb-3 text-foreground">
                Гарантия №2: Чистый старт
              </h4>
              <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <p>
                  При переходе к нам мы проводим полный аудит вашего учёта за
                  предыдущий год. Находим и нейтрализуем все «мины», которые
                  оставил прошлый бухгалтер.
                </p>
                <p>
                  И берём на себя 100% общения с ним. Вам не нужно ничего
                  выяснять, просить, требовать. Мы сами получим все базы,
                  документы и доступы.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-accent/40 pl-6">
              <h4 className="font-serif text-lg md:text-xl mb-3 text-foreground">
                Гарантия №3: Личная ответственность
              </h4>
              <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <p>
                  Каждый наш бухгалтер несёт личную финансовую ответственность за
                  результат. Это закреплено в трудовом договоре.
                </p>
                <p>
                  Если по вине конкретного сотрудника вы получите штраф — он
                  выплачивается из его кармана, а не из вашего.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== PRICE ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            Сколько это стоит
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>Давайте посчитаем.</p>

            <p>
              Система «Протокол Анти-Блок» с ежедневным мониторингом, защитой
              сделок, календарём отчётности и финансовым периметром — это 25 000
              рублей в месяц.
            </p>

            <p>Пакет «Юридический Щит» — ещё 15 000 рублей ценности.</p>

            <p>
              Сервис «Зелёный Свет для Этапа» — ещё 15 000 рублей ценности.
            </p>

            <p className="font-semibold">
              Общая ценность: 55 000 рублей в месяц.
            </p>

            <p className="font-semibold text-accent text-xl">
              Ваша инвестиция: 25 000 рублей в месяц.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== COMPARISON ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p className="font-semibold">Много это или мало?</p>

          <p>
            Один день простоя стройки из-за заблокированного счёта обходится в
            300 000 — 500 000 рублей. Иногда больше.
          </p>

          <p>
            Один штраф за неправильно оформленный НДС может стоить миллионы.
          </p>

          <p>
            Одна ошибка в КС-2 может привести к судебному спору с заказчиком на
            десятки миллионов.
          </p>

          <p className="font-semibold">
            25 000 рублей в месяц — это 820 рублей в день.
          </p>

          <p>
            Меньше, чем стоимость одного часа работы вашего экскаватора.
          </p>

          <p>
            За эти деньги вы получаете не бухгалтера, который сдаёт отчёты. Вы
            получаете систему защиты, которая позволяет вам спокойно строить и
            выигрывать тендеры, пока мы держим оборону.
          </p>
        </div>
      </section>

      {/* ===== TRANSITION + SECOND CTA ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
          <p>
            Готовы перестать тушить пожары и начать их предотвращать?
          </p>
          <p>Прежде чем перейти к следующему шагу — давайте соберём всё вместе.</p>
        </div>
      </section>

      <Divider />

      {/* ===== BLOCK T — SUMMARY ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground text-center">
            Что вы получаете
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {/* Column 1 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif text-lg mb-4 text-foreground">
                Система «Протокол Анти-Блок»:
              </h3>
              <ul className="space-y-3 font-sans text-sm leading-relaxed text-foreground">
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Ежедневный мониторинг рисков блокировки с конкретными
                    рекомендациями
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Досье должной осмотрительности по каждой ключевой сделке
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Облачный календарь всех дедлайнов и полный контроль
                    отчётности
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Мгновенные оповещения об исках, проверках и других угрозах
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif text-lg mb-4 text-foreground">
                Бонусы:
              </h3>
              <ul className="space-y-3 font-sans text-sm leading-relaxed text-foreground">
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Пакет «Юридический Щит» — консультации по договорам и
                    претензиям
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Сервис «Зелёный Свет для Этапа» — подтверждение
                    финансирования перед началом работ
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif text-lg mb-4 text-foreground">
                Тройная гарантия:
              </h3>
              <ul className="space-y-3 font-sans text-sm leading-relaxed text-foreground">
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Месяц бесплатно при блокировке по нашей вине
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Полный аудит за прошлый год и общение с прошлым бухгалтером
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">&mdash;</span>
                  <span>
                    Личная финансовая ответственность каждого сотрудника
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Price block */}
          <div className="text-center bg-card border border-border rounded-lg py-8 px-6">
            <p className="font-sans text-base text-muted-foreground mb-1">
              Общая ценность: 55 000 рублей в месяц.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-accent font-bold">
              Ваша инвестиция: 25 000 рублей в месяц.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== SCARCITY ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Важное ограничение
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>Мы не работаем на потоке.</p>

            <p>
              Каждый новый клиент проходит через процедуру «Чистый Старт» —
              полный аудит учёта за предыдущий год. Это кропотливая работа,
              которая требует времени и внимания наших лучших специалистов.
            </p>

            <p>
              Поэтому мы физически не можем взять больше двух-трёх новых клиентов
              в месяц.
            </p>

            <p className="font-semibold text-accent text-lg">
              В этом месяце осталось 1 место.
            </p>

            <p>
              Если вы оставите заявку сейчас, мы зафиксируем его за вами. Если
              нет — следующее окно откроется только через 3–4 недели.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== CTA SECTION ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            Следующий шаг
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>
              Нажмите кнопку ниже и запишитесь на бесплатную стратегическую
              сессию.
            </p>

            <p>
              Это не продающий звонок, где вас будут дожимать. Это 30-минутная
              консультация, на которой мы:
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">&mdash;</span>
                <span>
                  Разберём вашу текущую ситуацию с бухгалтерией
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">&mdash;</span>
                <span>
                  Покажем конкретные точки риска, которые есть прямо сейчас
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">&mdash;</span>
                <span>
                  Объясним, как система «Протокол Анти-Блок» закроет именно ваши
                  уязвимости
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">&mdash;</span>
                <span>Ответим на все вопросы</span>
              </li>
            </ul>

            <p>
              Даже если вы решите не работать с нами, вы уйдёте с чётким
              пониманием, где в вашем бизнесе «тонкие места» и что с ними делать.
            </p>

            <CTAButton />
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== FAQ ===== */}
      <section className="py-8 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-sans text-base md:text-lg text-left">
                А если мне не подойдёт?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base leading-relaxed text-muted-foreground">
                Именно для этого существует стратегическая сессия. За 30 минут мы
                вместе поймём, есть ли смысл работать. Если увидим, что наша
                система вам не нужна или не подходит — скажем об этом прямо. Нам
                невыгодно брать клиентов, которым мы не сможем помочь.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-sans text-base md:text-lg text-left">
                Как происходит переход от текущего бухгалтера?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base leading-relaxed text-muted-foreground">
                Максимально безболезненно для вас. Мы сами связываемся с вашим
                бухгалтером, получаем все базы и документы, проводим аудит. Вам
                нужно только подписать доверенность и ответить на несколько
                вопросов о бизнесе. Всё остальное — наша работа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-sans text-base md:text-lg text-left">
                У меня уже есть бухгалтер в штате. Зачем мне аутсорс?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base leading-relaxed text-muted-foreground">
                Вопрос не в том, где сидит бухгалтер — в вашем офисе или в
                нашем. Вопрос в системе. Штатный бухгалтер работает один, без
                контроля, без второго мнения, без доступа к экспертизе по сложным
                вопросам. Заболел — всё встало. Уволился — катастрофа. У нас
                работает команда, где каждого сотрудника страхуют коллеги. Плюс
                вы получаете доступ к 26-летнему опыту Марии и юридическому
                отделу. Ни один штатный бухгалтер этого не даст.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-sans text-base md:text-lg text-left">
                Почему так дёшево? В чём подвох?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base leading-relaxed text-muted-foreground">
                Подвоха нет. 25 000 рублей — это не «дёшево». Это справедливая
                цена за систему, которая работает. Мы не раздуваем штат, не
                снимаем офис в Москва-Сити, не тратим деньги на понты. Всё идёт
                в качество работы и зарплаты специалистам. Поэтому можем давать
                премиальный сервис без премиальной наценки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-sans text-base md:text-lg text-left">
                А вдруг вы тоже исчезнете, как прошлые подрядчики?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-base leading-relaxed text-muted-foreground">
                Мы на рынке 11 лет. Пережили два кризиса, пандемию и всё
                остальное. Наши клиенты работают с нами годами — потому что мы
                даём результат. Но если вам нужны дополнительные гарантии — мы
                готовы прописать в договоре всё, что вас успокоит.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Divider />

      {/* ===== FINAL EMOTIONAL APPEAL ===== */}
      <section className="py-10 animate-fade-up">
        <div className="article-container">
          <h2 className="font-serif text-2xl md:text-3xl mb-10 text-foreground">
            Последнее
          </h2>

          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>
              Вы можете закрыть эту страницу и продолжить жить как раньше.
            </p>

            <p>
              Надеяться, что бухгалтер не ошибётся. Что банк не заблокирует
              счёт. Что налоговая не пришлёт требование в самый неподходящий
              момент. Что кассовый разрыв как-нибудь рассосётся сам.
            </p>

            <p>Иногда везёт. Иногда — нет.</p>

            <p>
              А можете сделать один шаг и узнать, каково это — строить бизнес,
              когда тыл надёжно прикрыт.
            </p>

            <p>
              Когда вы на переговорах с заказчиком, а в телефон приходит
              сообщение: «Налоговая прислала запрос. Мы уже ответили. Рисков
              нет».
            </p>

            <p>
              Когда вы в отпуске с семьёй, а бухгалтерия работает как часы — без
              вашего участия.
            </p>

            <p>
              Когда вы думаете о новых объектах и тендерах, а не о том, хватит ли
              денег на зарплату бригаде в следующем месяце.
            </p>

            <p>Это возможно. И это ближе, чем вам кажется.</p>

            <CTAButton />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Index;