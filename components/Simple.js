import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts , addPosts } from '../actions/postAction'

class Simple extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    onAdd = () => {
        this.props.addPosts()
    }

    render() {
        console.log(this.props);
        
        return (
            <div>
                test
                <button onClick={this.onAdd}>add</button>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
      items: state.posts.items,
    }
}
  

export default connect( mapStateToProps , { fetchPosts , addPosts } )(Simple);