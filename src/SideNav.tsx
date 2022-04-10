import { Component, ReactNode } from "react";

export interface SideNavigationProps {

}

export interface SideNavigationState {
    projects: Project[];
    loading?: boolean;
}

export interface Sprint {
    sprintId: string;
    sprintName: string;
    startDate: string;
    endDate?: string;
}

export interface Project {
    projectId: string;
    projectName: string;
    startDate: string;
    sprints?: Sprint[];
}

const columns = [
    "projectId",
    "projectName"
]

export default class SideNavigation extends Component<SideNavigationProps, SideNavigationState> {

    constructor(props: SideNavigationProps) {
        super(props);
        this.state = {
            projects: [],
            loading: true
        }
    }


    public render(): ReactNode {
        return (
            <div className="sidenav">
                <a href="#section">About</a>
                <a href="#section">Services</a>
                <a href="#section">Clients</a>
                <a href="#section">Contact</a>
            </div>
        );
    }
}