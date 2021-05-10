import React from 'react'
const FirebaseContext = React.createContext(null)

/*-------------Ajouter par moi----------------*/
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
/*------------- Fin Ajouter par moi----------------*/

export default FirebaseContext;