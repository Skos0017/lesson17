import { useEffect, useState } from "react";

function useTimerHook(interval){
  const [second, setSecond] = useState(0);

  useEffect(()=> {
    const timer = setInterval(() =>{
      setSecond((cont) => cont + 1)
    }, interval);
    return () => clearInterval(timer);
  },[interval])
  return second;
}

function TimeComp(){
  const seconds = useTimerHook(1000);
  return<div>Неактивен: {seconds}</div>
}
  
function App() {
  return (
      <TimeComp/>
  )
}

export default App;

/*
Задача. Хук для отслеживания активности пользователя.
Необходимо реализовать пользовательский хук, который будет отслеживать активность
пользователя, такую как клики и движение мыши. Если пользователь не выполняет
никаких действий в течение 30 секунд, его состояние меняется на "неактивен". 

Хук должен возвращать два значения: флаг активности (isActive) и время последнего
взаимодействия пользователя с приложением.
Шаги для реализации:

Создание основного состояния активности
Нам нужно отслеживать, активен ли пользователь. Для этого создадим состояние
isActive, которое будет по умолчанию true, и будет изменяться на false, если пользователь
неактивен в течение 30 секунд.
Отслеживание событий активности
Нам нужно отслеживать действия пользователя, такие как клики и движение мыши. Для
этого будем использовать addEventListener для событий mousemove и click, чтобы знать,
когда пользователь был активен в последний раз.

Таймер для проверки активности
Используем таймер, который будет срабатывать каждые 30 секунд. Если за это время не
произошло никаких событий активности, флаг активности меняется на false.

Сброс таймера при активности
При каждом взаимодействии с пользователем (клик, движение мыши) нужно сбрасывать
таймер и устанавливать новое время последнего взаимодействия.
Возврат состояния

Хук должен возвращать флаг активности и время последнего взаимодействия
*/