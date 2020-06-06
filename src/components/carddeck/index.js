import React from "react";
import "./style.css";
import cardData from "../../data/images.json";
import Utility from "../../utility";
import ImageCard from "../imagecard";
import ScoreBoard from "../scoreBoard";
//import MessageOverlay from "../messageOverlay";

class CardDeckContainer extends React.Component {
  state = {
    data: cardData,
    score: 0,
    highScore: 0,
  };

  componentDidMount = () => {
    this.setState({ score: 0, data: cardData });
  };

  updateClicked = (_index) => {
    //Create new array from state data
    let newData = this.state.data;

    //Change property for ID
    newData[_index].isClicked = true;

    //Save new data as state
    this.setState({ data: newData });
  };

  updateScore = () => {
    let newScore = this.state.score + 1;
    if (newScore >= 12) {
      alert("You Win, Try again");
      this.resetScore();
      this.resetData();
      return;
    }
    this.setState({
      score: newScore,
      highScore:
        newScore > this.state.highScore ? newScore : this.state.highScore,
    });
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  resetData = () => {
    let newData = this.state.data;
    newData.forEach((element) => {
      element.isClicked = false;
    });
    this.setState({ data: newData });
  };

  shuffleCards = () => {
    //shuffle data then map to elements
    let shuffledArray = Utility.shuffle(this.state.data);
    return shuffledArray.map((result) => (
      <ImageCard
        key={result.name}
        id={result.id}
        name={result.name}
        image={result.image}
        handleClick={this.handleCardClick}
      ></ImageCard>
    ));
  };

  handleCardClick = (event) => {
    event.preventDefault();
    let name = event.target.getAttribute("name");
    //Get index of Image data
    let index = this.state.data.findIndex((element) => element.name === name);

    //Check if card data has been clicked
    if (this.state.data[index].isClicked) {
      //End Game
      this.resetScore();
      this.resetData();
      alert("you lose, good day!");
    } else {
      //Update data
      this.updateClicked(index);
      this.updateScore();
    }
    console.log(this.state.data);
    console.log(this.state.score);

    //Shuffle;
  };

  render() {
    return (
      <>
        {/* Score Board */}
        <ScoreBoard
          score={this.state.score}
          highScore={this.state.highScore}
        ></ScoreBoard>

        {/* Card Deck */}
        <div className="row my-3 row-cols-2 row-cols-md-4">
          {this.shuffleCards()}
        </div>

        {/* Overlay */}
        {/* <MessageOverlay></MessageOverlay> */}
      </>
    );
  }
}

export default CardDeckContainer;
