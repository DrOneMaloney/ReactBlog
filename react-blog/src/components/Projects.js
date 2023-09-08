import React from "react";
import "./Projects.css";
import ReactWebsiteImage from './images/ReactWebsite.png'

function Projects() {
    return (
        <div className="projects-page">
            <h2 className="page-heading">Projects</h2>

            <table className="projects-table">
                <tr>
                    <th colSpan={2} className="website-head">This Website</th>
                </tr>
                <tr>
                    <td>
                        <img src={ReactWebsiteImage} alt="This Website" className="project-image"/>
                    </td> 
                    <tr>
                        <td className="table-data" colSpan={2}>
                            <p className="website-body">ReactWebsite</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-data">
                            <p className="website-body">Github Link</p>
                        </td>
                        <td className="table-data">
                            <a href="https://github.com/DrOneMaloney/ReactBlog" className="website-body">Click Me!</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-data">
                            <p className="website-body">Date Started</p>
                        </td>
                        <td className="table-data">
                            <p className="website-body">Date</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-data">
                            <p className="website-body">Date Updated</p>
                        </td>
                        <td className="table-data">
                            <p className="website-body">Date</p>
                        </td>
                    </tr>
                </tr>
            </table>    
        </div>
    );
}

export default Projects;