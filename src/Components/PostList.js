import axios from 'axios'
import React, {Component} from 'react'

export class PostList extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            posts: JSON
        }
        
    }
//https://hacker-news.firebaseio.com/v0/item/29042728.json?print=pretty
    componentDidMount(){
        axios.get('https://hacker-news.firebaseio.com/v0/item/29042728.json?print=pretty')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
            
        }
    
    render(){
        const {posts} = this.state
        return(
            <div>
                List Below
                {
                posts.length ? 
                posts.map(post => <div key={post.id}>{post.by}</div>):
                null
                }
            </div>
        )
    }


}