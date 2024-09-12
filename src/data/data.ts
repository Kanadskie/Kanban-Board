import { data } from '../interfaces/interfaces.ts'


function initStorage() {
    !localStorage.getItem('data') &&
    localStorage.setItem(
        'data',
        `{
        "backlog": [],
        "ready": [],
        "inProgress": [],
        "finished": []
        }`
    )
}

function getData(): data {
    const data: string | null = localStorage.getItem('data')
    const recievedData: data = data ? JSON.parse(data) : {}
    return recievedData
}

function setData(data: data) {
    const updatedData = JSON.stringify(data)
    localStorage.setItem('data', updatedData)
}

function setId(): number {
    let id: number = 0
    const currentData: data = getData()

    for (let key in currentData) {
        id += +currentData[key].length
    }
    return id
}

function activeCounter(): number {
    let counter: number = 0
    const currentData: any = getData()

    for (let key in currentData) {
        if (key !== 'finished') {
            counter += +currentData[key].length
        }
    }
    return counter
}

function finishedCounter(): number {
    let counter: number = 0
    const currentData: data = getData()

    for (let key in currentData) {
        if (key === 'finished') {
            counter += +currentData[key].length
        }
    }
    return counter

}

export {initStorage, getData, setData, setId, activeCounter, finishedCounter}