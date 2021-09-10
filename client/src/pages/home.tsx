import React from 'react';
import IPageProps from "../interfaces/page";
import {Container} from "reactstrap";
import Navigation from '../components/Navigation'
import Header from '../components/Header'

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <Container fluid classname="p-0">
            <Navigation/>
            <Header
                title="Typescript Blog Website"
                headline="Check out these community posts!"
            />
            <Container className="mt-5">
                Blog stuff here ....
            </Container>
        </Container>
    )
}

export default HomePage;
