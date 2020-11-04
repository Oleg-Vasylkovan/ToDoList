const Task = props => {
    const {task,handleCheckBox,handleDestroyTask,idx} = props;


    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title" style={task.isCompleted ? {textDecoration:"line-through"}:null}>{task.title}</h2>
                <div className="form-group">
                    <input type="checkbox" className="form-control" checked={task.isCompleted} onChange={(e) => handleCheckBox(e,idx)}/>
                </div>
            </div>
            {
                task.isCompleted ? <button className="btn btn-danger" onClick={(e) => handleDestroyTask(e,idx)}>Delete</button> : null
            }
        </div>
    )
}

export default Task;