import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { Form1, Email1, Password1, H11 } from '../components/styledComponents/LoginFormStyled'

export default class loginForm extends Component {
    render() {
        return (
            
            <Container maxWidth="sm">
                <Form1>
                    <H11>Login</H11>
                    <Email1 placeholder="Email" />
                    <Password1 placeholder="Senha" />
                </Form1>
            </Container>
          
 
        )
    }
}

