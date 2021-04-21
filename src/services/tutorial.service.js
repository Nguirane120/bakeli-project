import firebase from "../Composant/Firebase/firebase";

//const db = firebase.ref("/Cours");

class TutorialDataService {
  getAll() {
    //return db;
  }

  create(tutorial) {
    //return db.push(tutorial);
  }

  update(key, value) {
    //return db.child(key).update(value);
  }

  delete(key) {
    //return db.child(key).remove();
  }

  deleteAll() {
    //return db.remove();
  }
}

export default new TutorialDataService();