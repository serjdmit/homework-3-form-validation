import React, { Component } from 'react';
import FormField from './FormField';
import './Form.css';
import image from './assets/bond_approve.jpg';

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        passwordField: '',
        submited: false,
        loggedIn: false
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            submited: true
        });

        const firstName = this.state.firstName.toLowerCase();
        const lastName = this.state.lastName.toLowerCase();
        const password = this.state.passwordField.toLowerCase();

        if (firstName === 'james' && lastName === 'bond' && password === '007') {
            this.setState({
                loggedIn: true
            });
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            submited: false
        });
    }

    render(){
        const {firstName, lastName, passwordField, submited, loggedIn} = this.state;
        return (
            <div className="app-container">
                {loggedIn ? (
                    <img src={image} alt="bond approve" className="t-bond-image"/>
                ) : (
                    <form className="form" onSubmit={this.handleSubmit}>
                        <h1>Введите свои данные, агент</h1>
                        <FormField
                            inputType="text"
                            fieldName="Имя"
                            inputClass="firstname"
                            inputName="firstName"
                            inputValue={firstName}
                            handleChange={this.handleChange}
                            submited={submited}
                            fieldValue={firstName}
                            emptyName="Нужно указать имя"
                            wrongName="Имя указано не верно"
                            check="james"
                        />
                        <FormField
                            inputType="text"
                            fieldName="Фамилия"
                            inputClass="lastname"
                            inputName="lastName"
                            inputValue={lastName}
                            handleChange={this.handleChange}
                            submited={submited}
                            fieldValue={lastName}
                            emptyName="Нужно указать фамилию"
                            wrongName="Фамилия указана не верно"
                            check="bond"
                        />
                        <FormField
                            inputType="password"
                            fieldName="Пароль"
                            inputClass="password"
                            inputName="passwordField"
                            inputValue={passwordField}
                            handleChange={this.handleChange}
                            submited={submited}
                            fieldValue={passwordField}
                            emptyName="Нужно указать пароль"
                            wrongName="Пароль указан не верно"
                            check="007"
                        />
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value="Проверить"/>
                        </div>
                    </form>
                )}
            </div>
        )
    }
}