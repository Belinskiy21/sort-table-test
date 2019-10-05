import React from 'react'


export default function SeedTable(props) {
  return (
    <table className='table'>
      <thead>
        <tr onClick={(evt) => props.sortBy(evt.target.textContent.toLowerCase())}>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Region</th>
          <th>Country</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
      {
        props.data.map(row => (
          <tr className={row.name} key={props.data.indexOf(row)}>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.region}</td>
            <td>{row.country}</td>
            <td>{row.birthday}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
