import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="cardName">
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            <textarea
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="cardAttr2">
            <input
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="cardAttr3">
            <input
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="cardImage">
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            <select
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            { hasTrunfo ? <p> Você já tem um Super Trunfo em seu baralho </p> : <input
              type="checkbox"
              data-testid="trunfo-input"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />}
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
