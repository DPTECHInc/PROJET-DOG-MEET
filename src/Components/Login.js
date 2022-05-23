import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/Login.css";

export default function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Connexion OK (FAKE)");
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="userName">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        autoComplete="on"
                        autoFocus
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        autoComplete="off"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className="Button" block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Connexion
                </Button>
            </Form>
        </div>
    );
}
