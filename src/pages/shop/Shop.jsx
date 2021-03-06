import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/CollectionPreview'

import SHOP_DATA from './shop.data.js'

export default class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}
