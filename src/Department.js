import React,{Component} from 'react';
import { Table } from 'react-bootstrap';

export class Department extends Component{

    constructor(props){
        super(props);
        this.state = {deps:[]}
    }
    
    refreshList(){
        fetch(process.env.REACT_API_URL+"department")
        .then(response=>response.json).then(data=>{
            this.setState({deps:data})
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {deps} = this.state;
        return(
            <div>
                <Table className='mt-4' striped border hover size='sm'>
                    <thead>
                        <tr>Department Id</tr>
                        <tr>Department Name</tr>
                        <tr>Options</tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.dept_id}>
                                <td>{dep.dept_id}</td>
                                <td>{dep.dept_name}</td>
                                <td>Edit/delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}