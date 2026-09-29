import th from '@fullcalendar/react/locales/th'
import React, { useState } from 'react'
import { useFormState } from 'react-dom'

const TableComp = () => {
  const [anno, setAnno] = useState(2026)
  const [annoV, setAnnoV] = useState(1)
  const [semestre, setSemestre] = useState(2)
  const [materia, setMateria] = useState(
    'Informatica - Informatica per la Comunicazione Digitale',
  )
  const giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì']
  const ore = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13-00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
  ]

  var corso_studi = ''

  const ttl2 = 'Informatica - Informatica per la Comunicazione Digitale'
  const splt = ttl2.split('-')
  corso_studi = splt[0].substring(0, 3).toUpperCase() + ' + '
  //console.log(splt)

  const ttl = splt[1].replaceAll(' ', '')

  var sL = ttl.length
  var i = 0
  for (; i < sL; i++) {
    if (ttl.charAt(i) === ttl.charAt(i).toUpperCase()) {
      corso_studi = corso_studi + ttl.charAt(i)
    }
  }

  class infoVal {
    acr
    cors
    denom
    doc
    constructor(denom: String, doc: String) {
      this.acr = ''
      this.cors = corso_studi
      this.denom = denom
      this.doc = doc

      const vlgh = denom.split(' ')

      vlgh.forEach((v) => {
        if (v[0] == '(') {
          this.acr = this.acr + ' ' + v[1]
        } else {
          this.acr = this.acr + v[0]
        }
      })
    }
  }

  const infoL1 = new infoVal(
    'Matematica Generale (Parte 1)',
    "Sonia L'Innocente",
  )

  const infoL2 = new infoVal('Programmazione Teoria', 'Michele Loreti')

  const totvl = [infoL1, infoL2]

  return (
    <div>
      <div className="w-full flex justify-center items-center font-bold text-lg">
        Orario Lezioni A.A. : {anno}/{anno + 1}
      </div>
      <div>Anno:{annoV}</div>
      <div>Semestre:{semestre}</div>
      <div className="w-full flex justify-center items-center font-bold text-lg">
        {materia}
      </div>
      <div className="h-4"></div>
      <table>
        <tr>
          <th></th>
          {giorni.map((giorno) => (
            <>
              <th>{giorno}</th>
              <th>Aula</th>
            </>
          ))}
        </tr>
        <tr></tr>
        {ore.map((ora) => (
          <>
            <tr>
              {ora == '13-00 - 14:00' ? (
                <td className="opacity-0">{ora}</td>
              ) : (
                <td className="ltdg">{ora}</td>
              )}
              {giorni.map(() => (
                <>
                  <td></td>
                  <td></td>
                </>
              ))}
            </tr>
          </>
        ))}
      </table>
      <div className="h-3.5"></div>
      <table>
        <tr>
          <th colSpan={1}>Acronimo</th>
          <th colSpan={1}>Corso di studi</th>
          <th colSpan={8}>Denominazione</th>
          <th colSpan={1}>Docente</th>
        </tr>

        {totvl.map((vl) => (
          <tr>
            <td>{vl.acr}</td>
            <td>{vl.cors}</td>
            <td className="brlf">{vl.denom}</td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>
            <td className="nbrd"></td>

            <td>{vl.doc}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default TableComp
