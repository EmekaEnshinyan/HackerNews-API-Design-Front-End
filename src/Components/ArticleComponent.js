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
                            <th>Articles Id</th>
                            <th>Articles Name</th>
                            <th>Articles Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book =>
                                    <tr key={articles.id}>
                                        <td>{articles.id}</td>
                                        <td>{articles.bookName}</td>
                                        <td>{articles.author}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}