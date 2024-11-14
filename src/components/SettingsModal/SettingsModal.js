import React from 'react';
import Modal from '../Modal';
import { GameLogicContext } from '../GameProvider';
import styles from '../Modal/Modal.module.css';

function SettingsModal() {

  const {difficulty, setDifficulty} = React.useContext(GameLogicContext);

  return (
    <Modal>

      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.title}>change difficulty</legend>
            <input type="radio" name="difficulty" id="difficulty-easy" value="easy" checked={difficulty === "easy"} onChange={event => setDifficulty(event.target.value)} />
            <label htmlFor='difficulty-easy'>
              Easy
            </label>
            <input type='radio' name='difficulty' id='difficulty-medium' value='medium' checked={difficulty === 'medium'} onChange={event => setDifficulty(event.target.value)} />
            <label htmlFor='difficulty-medium'>
              Medium
            </label>
            <input type='radio' name='difficulty' id='difficulty-hard' value='hard' checked={difficulty === 'hard'} onChange={event => setDifficulty(event.target.value)} />
            <label htmlFor='difficulty-hard'>
              Hard
            </label>
          </fieldset>

        </form>
      </div>

    </Modal>
  )
}

export default SettingsModal;
