import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'



function App() {
    const[inputValue,setInputValue]=useState({
        id:uuidv4(),
        task:"",
        dueDate:"",
        img:""
    })
    const [tasks, setTasks] = useState([]);

    function clearInputs(){
        setInputValue(
            {
                id:uuidv4(),
                task:"",
                dueDate:"",
                img:""
            }
        )
    }
    function handleInputChange(e){
        setInputValue(
            {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        )
    }

    function addButton(){

        if(inputValue.task!="") {
            {
                setTasks((prevTasks) =>[
                        ...prevTasks,
                        {
                            id: uuidv4(),
                            task: inputValue.task,
                            dueDate: inputValue.dueDate,
                            img: `https://picsum.photos/200?random=${Math.random()}`
                        }
                    ]

                )
            }
        }
        clearInputs()
    }



    function deleteButton(id){
       setTasks(tasks.filter(t=>t.id!==id))
    }
    return(
        <>
            <div className="container mt-4">
                <div className="row">
                    {tasks.map((t) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-3" key={t.id}>
                            <div className="card shadow-sm">
                                <img src={t.img} className="card-img-top mb-3 rounded" alt="Task Thumbnail"/>
                                <div className="card-body">
                                    <h5 className="card-title">{t.task}</h5>
                                    <p className="text-muted">Due Date: {t.dueDate}</p>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={() => deleteButton(t.id)}>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Input Fields and Add Button */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Task</span>
                            <input type="text" aria-label="Task" className="form-control" name="task"
                                   value={inputValue.task} onChange={handleInputChange} placeholder="Enter task"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Due Date</span>
                            <input type="date" aria-label="Due Date" className="form-control" name="dueDate"
                                   value={inputValue.dueDate} onChange={handleInputChange}/>
                        </div>
                        <button className="btn btn-success w-100" onClick={addButton}>Add Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
