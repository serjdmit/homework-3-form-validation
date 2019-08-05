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
                        {/* <p className="field">
                            <label htmlFor="firstName" className="field__label"><span className="field-label">Имя</span></label>
                            <input
                                type="text"
                                className="field__input field-input t-input-firstname"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}/>
                            <span className="field__error field-error t-error-firstname">
                                {(function(){
                                    if (submited && firstName === '') {
                                        return 'Нужно указать имя'
                                    }
                                    if (submited && firstName.toLowerCase() !== 'james') {
                                        return 'Имя указано не верно'
                                    }
                                })()}
                            </span>
                        </p> */}
                        {/* <p className="field">
                            <label htmlFor="lastName" className="field__label"><span className="field-label">Фамилия</span></label>
                            <input
                                type="text"
                                className="field__input field-input t-input-lastname"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}/>
                            <span className="field__error field-error t-error-lastname">
                                {(function () {
                                    if (submited && lastName === '') {
                                        return 'Нужно указать фамилию'
                                    }
                                    if (submited && lastName.toLowerCase() !== 'bond') {
                                        return 'Фамилия указана не верно'
                                    }
                                })()}
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="passwordField" className="field__label"><span className="field-label">Пароль</span></label>
                            <input
                                type="password"
                                className="field__input field-input t-input-password"
                                name="passwordField"
                                value={passwordField}
                                onChange={this.handleChange}/>
                            <span className="field__error field-error t-error-password">
                                {(function () {
                                    if (submited && passwordField === '') {
                                        return 'Нужно указать пароль'
                                    }
                                    if (submited && passwordField !== '007') {
                                        return 'Пароль указан не верно'
                                    }
                                })()}
                            </span>
                        </p> */}
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value="Проверить"/>
                        </div>
                    </form>
                )}
            </div>
        )
    }
}