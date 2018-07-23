import { Component } from 'react'
import moment from 'moment'
import { CommentList } from 'local-comment/react'
import Add from '../components/Add'

const topic = 'global'
const commentapi = '/commentapi'

export default class GlobalTopic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toUser: false,
    }
  }

  render() {
    const { toUser } = this.state
    const { user } = this.props
    return (<div>
      <h4>topic: {topic}</h4>
      <CommentList
        commentapi={commentapi}
        topic={topic}
        pageSize={5}
        RowTemplate={
          ({ comment = {} }) => {
            const { user, content, _commentTime } = comment
            return (<li>
              <span>{user}:{content}</span>
              <button
                onClick={() => this.setState({ toUser: user })}
              >reply</button>
              <i style={{ float: 'right' }}>{moment.unix(_commentTime).fromNow()}</i>
            </li>)
          }
        }
      />
      <Add
        commentapi={commentapi}
        topic={topic}
        toUser={toUser}
        user={user}
      />
    </div>)
  }

}