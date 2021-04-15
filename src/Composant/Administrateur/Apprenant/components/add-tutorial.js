import React, { Component } from "react";
//import React, { Component } from "react";//
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeNoms = this.onChangeNoms.bind(this);
    this.onChangePrenoms = this.onChangePrenoms.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeGmail = this.onChangeGmail.bind(this);
    this.onChangePasse = this.onChangePasse.bind(this);
    
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      noms: "",
      prenoms: "",
      telephone: "",
      gmail: "",
      passe: "",
      published: false,

      submitted: false,
    };
  }

  onChangeNoms(e) {
    this.setState({
      noms: e.target.value,
    });
  }

  onChangePrenoms(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeTelephone(e) {
    this.setState({
      telephone: e.target.value,
    });
  }

  onChangeGmail(e) {
    this.setState({
      gmail: e.target.value,
    });
  }



  onChangePasse(e) {
    this.setState({
     passe: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
     nomd: this.state.noms,
      prenoms: this.state.prenoms,
      telephone: this.state.telephone,
      gmail: this.state.gmail,
      passe: this.state.passe,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      noms: "",
      prenoms: "",
      telephone: "",
      gmail: "",
      passe: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="noms">Noms</label>
              <input
                type="text"
                className="form-control"
                id="noms"
                required
                value={this.state.noms}
                onChange={this.onChangeNoms}
                name="noms"
              />
            </div>

            <div className="form-group">
              <label htmlFor="prenoms">Prenoms</label>
              <input
                type="text"
                className="form-control"
                id="prenoms"
                required
                value={this.state.prenoms}
                onChange={this.onChangePrenoms}
                name="prenoms"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="telephone"
                required
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
                name="telephone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gmail">Gmail</label>
              <input
                type="text"
                className="form-control"
                id="gmail"
                required
                value={this.state.gmail}
                onChange={this.onChangeGmail}
                name="gmail"
              />
            </div>


            <div className="form-group">
              <label htmlFor="passe">Passe</label>
              <input
                type="text"
                className="form-control"
                id="passe"
                required
                value={this.state.passe}
                onChange={this.onChangePasse}
                name="passe"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
