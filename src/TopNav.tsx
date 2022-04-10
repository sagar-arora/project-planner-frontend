import { Component, ReactNode } from "react";

export interface TopNavigationProps {

}

export interface TopNavigationState {}

const columns = [
    "projectId",
    "projectName"
]

export default class TopNavigation extends Component<TopNavigationProps, TopNavigationState> {

    constructor(props: TopNavigationProps) {
        super(props);
        this.state = {
        }
    }


    public render(): ReactNode {
        return (
            <div className="topnav">
                <a href="#section">About</a>
                <a href="#section">Services</a>
                <a href="#section">Clients</a>
                <a href="#section">Contact</a>
            </div>
        );
    }
}