import React from 'react'
import FullCalendar, {
  type DateClickInfo,
  useCalendarController,
} from '@fullcalendar/react'
import themePlugin from '@fullcalendar/react/themes/monarch' // YOUR THEME
import dayGridPlugin from '@fullcalendar/react/daygrid'
// stylesheets
import '@fullcalendar/react/skeleton.css' // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css' // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css' // YOUR THEME'S PALETTE
import timeGridPlugin from '@fullcalendar/react/timegrid'
import listPlugin from '@fullcalendar/react/list'
import itLocale from '@fullcalendar/react/locales/it'

const CalendarComp = () => {
  const handleDateClick = (info: DateClickInfo) => {
    alert(info.dateStr)
  }

  function renderEventContent(eventInfo: any) {
    //<b>{eventInfo.timeText}</b>
    //console.log(eventInfo.timeText.replace('–', ' - '))
    return (
      <div>
        {eventInfo.timeText.replace('–', ' - ')}
        <div className="flex flex-col">
          <b className="font-bold">{eventInfo.event.title}</b>
          <br />
          {eventInfo.event['extendedProps'].aula}
          <div className="h-[px8]"></div>
          <b>Docenti: </b>
          {eventInfo.event['extendedProps'].docenti}
        </div>
      </div>
    )
  }

  const listv = [
    {
      id: '1',
      title: 'PROGRAMMAZIONE - Laboratorio',
      start: new Date('2026-09-28,14:00'),
      end: new Date('2026-09-28,17:00'),
      color: '#4287f5',
      extendedProps: {
        aula: 'Polo Carla Lodovici Edificio B  - Aula B1',
        docenti: 'Loreti Michele',
      },
    },
  ]

  const controllerk = useCalendarController()
  const buttons = controllerk.getButtonState()

  return (
    <div>
      <div className="h-[1000px] w-[1290px]">
        <FullCalendar
          plugins={[themePlugin, dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          events={listv}
          dateClick={handleDateClick}
          locale={itLocale}

          eventContent={renderEventContent}

          headerToolbar={{
            start: 'prev,next,today',
            center: 'title',
            right:
              'dayGridFiveDay,listMonthFiveDay,timeGridFiveDay,listWeekFiveDay',
            //'dayGridMonth,listMonth,dayGridWeek,listWeek,timeGridWeek,dayGridDay,timeGridDay',
            //time grid week
          }}

          views={{
            dayGridFiveDay: {
              type: 'dayGridMonth',
              weekends: false,
            },
            listWeekFiveDay: {
              type: 'listWeek',
              weekends: false,
            },
            listMonthFiveDay: {
              type: 'listMonth',
              weekends: false,
            },

            timeGridFiveDay: {
              type: 'timeGrid',
              duration: { weeks: 1 },
              slotMinTime: '07:00',
              //slotMaxTime: '20:00',
              weekends: false,
            },
          }}
          buttons={{
            timeGridFiveDay: {
              text: 'Griglia settimana',
            },
            dayGridFiveDay: {
              text: 'Griglia mese',
            },
            listWeekFiveDay: {
              text: 'Lista settimana',
            },
            listMonthFiveDay: {
              text: 'Lista mese',
            },
          }}
        />
      </div>
    </div>
  )
}

export { CalendarComp }
