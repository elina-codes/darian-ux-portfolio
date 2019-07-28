import { Link } from "gatsby"
import React from "react"

import "./grid_item.scss"

const GridItem = ({ itemTitle, itemImage, itemLink, itemCategories }) => (
  <Link to={itemLink} className="image__grid__item grid__item">
    <div
      style={{
        backgroundImage: `url(${itemImage})`,
      }}
      className="grid__image"
    ></div>
    <div className="image__grid__item__details">
      <h3>{itemTitle}</h3>
      <ul>
        <p>{itemCategories ? itemCategories.map((item, i) => item + (itemCategories.length === i + 1 ? '' : ' | ')) : '' }</p>
      </ul>
    </div>
  </Link>
)

export default GridItem
