import React from 'react'
import Select from "react-select"
import  '../styles.css'

const options = [
    {value: '1', label: 'Переговорная №1'},
    {value: '2', label: 'Переговорная №2'},
    {value: '3', label: 'Переговорная №3'},
    {value: '4', label: 'Переговорная №4'},
    {value: '5', label: 'Переговорная №5'},
    {value: '6', label: 'Переговорная №6'},
    {value: '7', label: 'Переговорная №7'},
    {value: '8', label: 'Переговорная №8'},
    {value: '9', label: 'Переговорная №9'},
    {value: '10', label: 'Переговорная №10'},
]

export const SelectRooms = () => {
    const [currentRoom, setCurrentRoom] = React.useState('')

    const getValueRoom = () => {
        return currentRoom ? options.find((room) => room.value === currentRoom) : ''
    }

    const onChangeRoom = (newRoom) => {
        setCurrentRoom(newRoom.value)
    }

    return(
        <div className='inpytStyle'>
            <h1>Переговорная №:</h1>
            <Select 
                placeholder='Выберете переговорную'
                options={options}
                value={getValueRoom()}
                onChange={onChangeRoom}
            />
        </div>
    )
}