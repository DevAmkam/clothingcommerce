import React, { Component } from 'react'
import MenuItem from '../menu-items/MenuItem'
import './directory.styles.scss'

export default class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {title: 'hats', imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', id: 1, linkUrl: 'hats'},
        {title: 'jackets', imageUrl: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', id: 2, linkUrl: 'jackets'},
        {title: 'sneakers', imageUrl: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', id: 3, linkUrl: 'sneakers'},
        {title: "women's", size: 'large', imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80', id: 4, linkUrl: 'women'},
        {title: "men's", size: 'large', imageUrl: 'https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80', id: 5, linkUrl: 'men'},
      ]
    }
  }
  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem  key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}
