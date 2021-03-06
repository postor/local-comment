import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { add } from '../lib/request'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: '',
    }
  }

  static propTypes = {
    commentapi: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
  }

  render() {
    const { commentText } = this.state
    const { commentapi, topic } = this.props
    return (<div>
      <input
        value={commentText}
        onChange={(e) => this.setState({ commentText: e.target.value })}
      />
      <button onClick={() => {
        const [, promise] = add(commentapi, topic, {
          content: commentText,
        })
        promise
          .then(insertedObj => console.log({ insertedObj }))
          .then(() => this.setState({ commentText: '' }))
          .catch(error => console.log({ error }))
      }}>submit</button>
    </div>)
  }
}

export default Add