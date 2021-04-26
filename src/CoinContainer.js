import React, {Component} from 'react';
import './CoinContainer.css';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'data:image/jpeg;base64,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'},
            { side: 'tails', imgSrc: 'https://onlinecoin.club/images/coins/United_Kingdom/0d154c48-21f7-445e-817c-f9b025e79529.jpg'}
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nHeads: 0,
            nTails: 0,
            nFlips: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(prevState => {
            return {
                currCoin: newCoin,
                nFlips: prevState.nFlips + 1,
                nHeads: prevState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: prevState.nTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }
    
    handleClick(){
        this.flipCoin();
    }

    render(){
        return(
            <div className='CoinContainer'>
                <h2>Coin Flipper</h2>
                {this.state.currCoin && <Coin data={this.state.currCoin} />}
                <hr />
                <button onClick={this.handleClick}>Flip a Coin</button>
                <p>From {this.state.nFlips} flips, there has been {this.state.nHeads} heads & {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer;