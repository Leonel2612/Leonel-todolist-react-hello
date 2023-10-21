// import { array } from 'prop-types'
import React, { useState } from 'react'
import '../../styles/index.css'

const Home = () => {
    const [inputTask, setNewTask] = useState('')
    const [isMouseOver, setIsMouseOver] = useState([false])
    const [countItem, setCountItem] = useState(0)
    const [itemTask, setItemTask] = useState([])
    const [itemBoolean, setItemBoolean] = useState(false)
    let count = 0

    const handleInputTask = (e) => {
        setNewTask(e.target.value)

    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            count = countItem + 1
            setItemBoolean(true)
            setItemTask([...itemTask, inputTask])
            console.log(count)
            setCountItem(count)
            setIsMouseOver([...isMouseOver, false])
            console.log(isMouseOver)
            setNewTask('')
        }
    }
    const handleDeleteTask = (index) => {
        count = countItem - 1
        let updatedItemTask = [...itemTask]
        updatedItemTask.splice(index, 1)
        setItemTask(updatedItemTask)
        setCountItem(count)
        console.log(count)
        let updatedMouseOver = [...isMouseOver]
        updatedMouseOver.splice(index, 1)
        setIsMouseOver(updatedMouseOver)
        if (count <= 0) {
            setItemBoolean(false)
        }
        // let arrayTask = itemTask
        // let taskTodelete = arrayTask[index]

        // console.log(taskTodelete)
        // let filterTask = arrayTask.filter((item) => item !== taskTodelete)
        // setItemTask(filterTask)
        // let filterButton = isMouseOver.filter((button) => { button!==
        // })
    }

    const handleMouseOver = (index) => {
        let updatedMouseOver = [...isMouseOver]
        updatedMouseOver[index] = true
        setIsMouseOver(updatedMouseOver)
        console.log(updatedMouseOver)
    }

    const handleMouseOut = (index) => {
        let updatedMouseOut = [...isMouseOver]
        updatedMouseOut[index] = false
        setIsMouseOver(updatedMouseOut)
        console.log(updatedMouseOut)
    }

    return (
        <div className="container-md" style={{
            backgroundColor: '#F6F6F6',
            position: 'relative',
            width: '100%'
        }}>
            <div className='title-todo'>
                <h1 style={{
                    color: '#ECDFDF',
                    textAlign: 'center',

                }}>Todos</h1>
            </div>
            <div className="card" style={{
                width: "30%", display: 'block', marginLeft: 'auto', marginRight: 'auto',
                borderRadius: 0,
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
            }}>
                <ul className="list-group list-group-flush">
                    <input
                        style={{
                            border: 'none',
                            borderBottom: '1px solid #F4F1F1',
                            height: '40px',
                            paddingLeft: '30px',
                            borderLeft: '1px solid #D2D2D2',
                            borderRight: '1px solid #D2D2D2',
                        }}
                        type="text" name="inputValue"
                        placeholder="What needs to be done?"
                        onChange={handleInputTask}
                        value={inputTask}
                        onKeyDown={handleKeyEnter} />
                    {itemTask.map((item, index) => {

                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center"
                                style={{
                                    height: '40px',
                                    paddingLeft: '30px',
                                    borderBottom: '1px solid #D2D2D2',
                                    borderLeft: '1px solid #D2D2D2',
                                    borderRight: '1px solid #D2D2D2',
                                }}
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={() => handleMouseOut(index)}
                                key={index}  >
                                {item}
                                <button className="buttonList"
                                    onClick={() => handleDeleteTask(index)}

                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        marginRight: '-10px',
                                        fontSize: '15px'
                                    }}
                                >
                                    {isMouseOver[index] ? 'X' : null}</button>
                            </li>
                        )
                    })}
                </ul>

                <div className='cardFooter' style={{
                    height: '20px',
                    padding: '3px',
                    borderBottom: '1px solid #D2D2D2',
                    borderLeft: '1px solid #D2D2D2',
                    borderRight: '1px solid #D2D2D2',
                    borderRadius: 0,

                }}>
                    <p style={{
                        paddingLeft: '10px',
                        fontSize: '10px',
                        color: "#D4D4D4"
                    }}>{!itemBoolean ? 'No tasks, add a task' : `${countItem} Item Left`}
                    </p>
                </div>

                {itemBoolean && (<>
                    <div className='secondFooter'
                        style={{
                            height: "5px",
                            width: '99.2%',
                            marginLeft: '1.5px',
                            marginRight: '1px',
                            borderBottom: '1px inset #D2D2D2',
                            borderLeft: '1px inset #D2D2D2',
                            borderRight: '1px inset #D2D2D2',
                            borderTop: 'none',
                            borderRadius: 0,
                        }}
                    />
                    <div className='thirdFooter'
                        style={{
                            height: "5px",
                            borderBottom: '1px inset #D2D2D2',
                            borderLeft: '1px inset #D2D2D2',
                            borderRight: '1px inset #D2D2D2',
                            borderTop: 'none',
                            width: '98.8%',
                            marginLeft: '2px',
                            marginRight: '1px',
                            borderRadius: 0,
                        }}
                    />

                </>)}


            </div>
        </div >
    )
}

export default Home

// onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
// {isMouseOver ? 'X' : null}