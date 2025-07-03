import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
        <div className={styles.background}>
            <div className={styles.topPart}/>
        </div>
    </>
  );
}

export default App;
