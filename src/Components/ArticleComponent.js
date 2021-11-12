import React from 'react'
import APIService from '../services/APIService'

export default class ArticleComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articles: []
        }
    }
    
    componentDidMount(){
        axios.getAxios('https://localhost:8080')
        APIService.getArticles().then((data) => {
            this.setState({articles: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Articles Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>By</th>
                            <th>descendants</th>
                            <th>id</th>
                            <th>kids</th>
                            <th>score</th>
                            <th>time</th>
                            <th>title</th>
                            <th>type</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}