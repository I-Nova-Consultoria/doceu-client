import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { Form1, Email1, Password1, H11, Btn1 } from '../components/styledComponents/LoginFormStyled'
import {  Switch  } from 'react-router-dom'
import Home from './Home'

  

export default class loginForm extends Component {
    render() {
        return (
            <Switch>
            <Container maxWidth="sm">
                <Form1>
                    <H11>Portal Analista</H11>
                    <Email1 placeholder="Email" />
                    <Password1 placeholder="Senha" />
                    <Btn1 type="submit" path="/home" component={Home}>Entrar</Btn1>
                </Form1>
            </Container>
            </Switch>
          
 
        )
    }
}

