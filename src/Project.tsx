import { Component, ReactNode } from "react";
import ProjectTable from "./ProjectTable";
import SideNavigation from "./SideNav";
import TopNavigation from "./TopNav";


export default class Project extends Component {

    constructor(props: any) {
        super(props);
    }

    public render(): ReactNode {

        return (
            const {project_id} = this.props.match.param;

            <div className="project">

                <TopNavigation />
                <SideNavigation />
                <ProjectTable />
            </div>
        );
    }
}