import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
export const Route = createFileRoute('/about')({ component: About })
import { CalendarComp } from '../components/global/CalendarComp'
import TableComp from '../components/global/TableComp'

function About() {
  const [displ, setDispl] = useState('Cal')

  const changeView = () => {
    if (displ == 'Cal') {
      setDispl('tab')
    } else if (displ == 'tab') {
      setDispl('Cal')
    } else {
      setDispl('Cal')
    }
  }

  return (
    <>
      <div className="pt-10">
        <div className="w-full h-full flex-col flex justify-center items-center">
          <p>funziona </p>
          <Button
            className="bg-red-600 cursor-pointer text-amber-50"
            onClick={changeView}
          >
            vw
          </Button>
        </div>
        {displ == 'Cal' ? <CalendarComp /> : <TableComp />}
      </div>
    </>
  )
}
