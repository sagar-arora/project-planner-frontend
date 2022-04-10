import { Component, Key, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";

export interface ProjectTableProps {

}

export interface ProjectTableState {
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

export default class ProjectTable extends Component<ProjectTableProps, ProjectTableState> {

    constructor(props: ProjectTableProps) {
        super(props);
        this.state = {
            projects: [],
            loading: true
        }
    }

    async getProjectData() {

        const projectResponse: AxiosResponse = await axios.get("rest/projects")

        console.log(projectResponse);

            const projects: Project[] = projectResponse.data;

            console.log(projectResponse.data);

            console.log(projects);
            this.setState({
                projects: projects
            });

    }

    async componentDidMount() {
        await this.getProjectData();
    }


    public render(): ReactNode {
        
        const {loading, projects} = this.state;
        return (
            <div className="table">
                <h2>Projects</h2>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    </tr>
                    {
                        projects.map((row: Project, key: Key) => {
                            return (<tr key={key}>
                                <td>
                                    <a href={window.origin + "/" + row.projectId}>{row.projectName}</a>
                                </td>
                                <td>
                                    {row.startDate}
                                </td>
                            </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}