import React, { Component } from "react"

export default class Search_bar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    return(
      <div>
        <label>Search:&nbsp;&nbsp;</label>
        <input          
          value = {this.state.term}
          onChange = { (event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
      this.setState({ term });
      this.props.onSearchTermChange(term);
  }
}
