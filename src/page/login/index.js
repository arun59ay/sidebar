import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
import './style.scss';
import {withRouter} from 'react-router-dom';
 
 class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
        password: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        email: "required|email",
        password: "required",
    });
    this.form.onformsubmit = (fields) => {
        console.log( localStorage.getItem('email'),".....");
        if((localStorage.getItem('email') === null) && (localStorage.getItem("password") === null)) return alert("not registered please registered first");
    else if(localStorage.getItem('email') !== fields.email) return alert("email not matched");
    else if(localStorage.getItem("password") !== fields.password) return alert("password not matched")
    else{
        console.log("ok tested")
this.props.history.push('/dashboard')
    }
    }
  }

  componentDidMount(){
      console.log(localStorage.getItem('email'),".....email", localStorage.getItem("password"));
   
  }
 
  render() {
    return (<React.Fragment>
        <form onSubmit={this.form.handleSubmit}>
 
            <p className="custom-input">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  className="mt-2 form-control"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                  autoComplete="off"
                />
              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
            <p className="custom-input">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  className="mt-2 form-control"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.password}
                  autoComplete="off"
                />
              </label>
              <label className="error">
                {this.state.errors.password ? this.state.errors.password : ""}
              </label>
            </p>
 
            
            <p>
              <button type="submit" className="btn btn-secondary">Submit</button>
            </p>
        </form>
    </React.Fragment>)
  }
}

export default withRouter(Login);