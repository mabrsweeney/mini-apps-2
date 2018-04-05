import React from 'react';
import F1 from './F1';
import F2 from './F2';
import F3 from './F3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      card: '',
      expiry: '',
      cvv: '',
      billingzip: '',
      f1: true,
      f2: false,
      f3: false
    }
    this.onStringChange = this.onStringChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.next = this.next.bind(this);

  }

  next(nextForm) {
    const formChange = {};
    formChange[`f${nextForm-1}`] = false;
    formChange[`f${nextForm}`] = true;
    this.setState(formChange);
  }

  onStringChange(e) {
    const newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <F1 next={this.next} display={this.state.f1} onStringChange={this.onStringChange}/>
        <F2 next={this.next} display={this.state.f2} onStringChange={this.onStringChange}/>
        <F3 next={this.onSubmit} display={this.state.f3} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;