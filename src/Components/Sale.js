import React, { Component } from 'react'
import '../Styles/Sale.css'

export class Sale extends Component {
    render() {
        let sortedPrices = this.props.prices.sort((a,b) => a < b ? 1 : -1 )
        let highest = sortedPrices[0]
        let color = this.props.item.price === highest ? '#232345' : '#232345'  
        return (
            <div className='stats-container'>
                <div>{this.props.item.title} for ${this.props.item.price}</div>
                <div><strong>{this.props.item.price === highest ? 'Your highest sale all year!' : null }</strong></div>
                <div id="barContainer">
                    <div className="donationBar" style={{width: `${this.props.item.price}%`, backgroundColor: color }}></div>
                </div>
            </div>

        )
    }
}

export default Sale
