import React, { Component } from "react";

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Presidential_dollar_coin_reverse.png/1017px-Presidential_dollar_coin_reverse.png",
      },
    ],
  };
  state = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  };

  flipCoin = () => {
    let index = Math.floor(Math.random() * this.props.coins.length);
    let current = this.props.coins[index];
    this.setState((curState) => {
      return {
        currCoin: current,

        nFlips: curState.nFlips + 1,
      };
    });
    if (current.side === "heads") {
      this.setState((st) => {
        return {
          nHeads: st.nHeads + 1,
        };
      });
    } else {
      this.setState((st) => {
        return {
          nTails: st.nTails + 1,
        };
      });
    }
  };

  handleClick = (e) => {
    this.flipCoin();
  };
  render() {
    return (
      <div className="CoinContainer">
        <h2>Bashla Firlatmaga</h2>
        <button onClick={this.handleClick}>Flip Me!</button>

        {this.state.currCoin && (
          <img
            src={this.state.currCoin.imgSrc}
            alt="Girl in a jacket"
            width="150"
            height="150"
          />
        )}

        <p>
          firlanma sayi {this.state.nFlips} bashin dushme sayi
          {this.state.nHeads} quyruq sayi {this.state.nTails}
        </p>
      </div>
    );
  }
}
