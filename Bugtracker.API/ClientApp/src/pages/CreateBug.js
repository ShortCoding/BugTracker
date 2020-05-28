import React, {Component} from 'react';

export class CreateBug extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '', 
            content : '',
            assignedTo : '', 
            project : '',
            attachement: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    
    handleFileChange(e){
        this.setState({ attachement: e.target.files });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        //this.props.history.push('/bugs');
    }

    render() {
        
        const projectsList = ['Project 1','Project 2','Project 3']; 
        const projects = projectsList.map( (p,index) => {
           return  <option key={index} value={index}> {p} </option>
        });
        
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} method="Post">
                    <div className="form-group">
                        <label htmlFor="project">Project</label>
                        <select className="form-control" id="projecy" name='project' value={this.state.project} onChange={this.handleChange}>
                            <option hidden disabled value> -- Select a project -- </option>
                            {projects}
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange}
                               placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea className="form-control" rows="5" name="content" value={this.state.content} onChange={this.handleChange}/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Attachement</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" name='attachement' 
                                    onChange={this.handleFileChange}/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    
                    <div className="d-flex">
                        <input type="submit" className="btn btn-primary ml-auto" value="Submit"/>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}