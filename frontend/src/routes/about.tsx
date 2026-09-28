import { createFileRoute } from '@tanstack/react-router'
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

export const Route = createFileRoute('/about')({ component: About })

function About() {
  const listv = [
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' },
    { title: 'event3', date: '2026-09-28' },
  ]

  const handleDateClick = (info: DateClickInfo) => {
    alert(info.dateStr)
  }

  const controllerk = useCalendarController()
  const buttons = controllerk.getButtonState()

  return (
    <>
      <div className="pt-10">
        <div className="w-full h-full flex justify-center items-center">
          funziona
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="toolbar">
            <button onClick={() => controllerk.today()}>
              {buttons.today.text}
            </button>
            <div className="toolbar-title">{controllerk.view?.title}</div>
          </div>
          <div className="w-5/10 h-5/10">
            <FullCalendar
              plugins={[themePlugin, dayGridPlugin, timeGridPlugin]}
              initialView="dayGridMonth"
              events={listv}
              dateClick={handleDateClick}

              headerToolbar={{
                start: 'prev,next',
                center: 'title',
                right:
                  'dayGridMonth,dayGridWeek,dayGridDay,timeGridWeek,timeGridDay',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
