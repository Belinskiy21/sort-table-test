import React from 'react'

export default function SeedTable(props) {
  return (
    <table className='table'>
      <thead>
        <tr onClick={(evt) => props.sortBy(evt.target.textContent.toLowerCase())}>
        {
          Object.keys(props.data[0]).map( (el, index) => (
            <th key={index}>
              {el.charAt(0).toUpperCase()+ el.slice(1)}
            </th>
          ))
        }
        </tr>
      </thead>
      <tbody>
      {
        props.data.map((row, index) => (
          <tr className={row.name} key={index}>
          {
            Object.values(row).map( (el, index) => (
              <td key={index}>
                {el}
              </td>
            ))
          }
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
