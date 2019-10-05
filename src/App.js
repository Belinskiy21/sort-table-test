import React from 'react'
import SeedTable from './components/seed-table/'
import data from './data/data.json'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : data,
      direction: {
        name: 'desc',
        address: 'desc',
        city: 'desc',
        region: 'desc',
        country: 'desc',
        birthday: 'desc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key){
    this.setState({
      data: data.sort( (a, b) =>
        this.state.direction[key] === 'asc'
          ? (a[key] > b[key]) ? -1 : 1
          : (b[key] > a[key]) ? -1 : 1
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }

  })
}

  render() {
    return (
      <div className="content">
        <SeedTable
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App
