import React from "react";
import apiMaster from "../../apiMaster";
import { AiFillStar } from "react-icons/ai";
import ProductCompareModal from "./productCompareModal";

class CardActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClicked: false,
      characteristicsList: null,
      featureCharacteristicsList: null,
      relatedCharacteristicsList: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.createCharacteristics = this.createCharacteristics.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductName !== prevProps.currentProductName) {
      this.createCharacteristics();
    }
  }

  handleClick() {
    this.createCharacteristics();
    this.setState({ wasClicked: !this.state.wasClicked });
  }

  createCharacteristics() {
    let combinedFeatures = [];
    let featureProductFeatures = [];
    let relatedProductFeatures = [];
    for (let i = 0; i < this.props.currentProductFeatures.length; i++) {
      let valueText, featureText;
      if (this.props.currentProductFeatures[i].value === "null") {
        valueText = "";
      } else {
        valueText = this.props.currentProductFeatures[i].value + " ";
      }
      if (this.props.currentProductFeatures[i].feature === "null") {
        featureText = "";
      } else {
        featureText = this.props.currentProductFeatures[i].feature;
      }
      combinedFeatures.push(valueText + featureText);
      featureProductFeatures.push(valueText + featureText);
    }
    for (let i = 0; i < this.props.relatedProductFeatures.length; i++) {
      let valueText, featureText;
      if (this.props.relatedProductFeatures[i].value === "null") {
        valueText = "";
      } else {
        valueText = this.props.relatedProductFeatures[i].value + " ";
      }
      if (this.props.relatedProductFeatures[i].feature === "null") {
        featureText = "";
      } else {
        featureText = this.props.relatedProductFeatures[i].feature;
      }
      combinedFeatures.push(valueText + featureText);
      relatedProductFeatures.push(valueText + featureText);
    }
    const uniqueFeatures = new Set(combinedFeatures);
    const uniqueFeaturesArray = Array.from(uniqueFeatures);
    const functionWrapper = () => {
      this.setState({
        characteristicsList: uniqueFeaturesArray,
        featureCharacteristicsList: featureProductFeatures,
        relatedCharacteristicsList: relatedProductFeatures,
      });
    };
    functionWrapper();
  }

  render() {
    return (
      <>
        <a
          className="action-button"
          href="javascript:void(0);"
          aria-label="Star to favorite item"
          onClick={this.handleClick}
        >
          <AiFillStar />
        </a>
        <ProductCompareModal
          clicked={this.state.wasClicked}
          characteristicsList={this.state.characteristicsList}
          handleClick={this.handleClick}
          currentProductFeatures={this.state.featureCharacteristicsList}
          relatedProductFeatures={this.state.relatedCharacteristicsList}
          currentProductName={this.props.currentProductName}
          relatedProductName={this.props.relatedProductName}
        />
      </>
    );
  }
}

export default CardActionButton;
