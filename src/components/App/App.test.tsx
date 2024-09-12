import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import App from './App.tsx'
import React from 'react'

afterEach(cleanup)

describe('App testing', () => {

    it('Backlog section: adding tasks', () => {

        localStorage.setItem(
            'data',
            `{
                "backlog": [],
                "ready": [],
                "InProgress": [],
                "finished": []
            }`
        )

        const { getByTestId } = render(<App />)
        let btnAdd = screen.getByTestId('backlog-button')
        fireEvent.click(btnAdd)
        const input = screen.getByTestId('backlog-input') as HTMLInputElement
        fireEvent.change(input, {target: {value: 'test task name'}})
        expect(input.value).toBe('test task name')
        btnAdd = screen.getByTestId('backlog-button')
        fireEvent.click(btnAdd)
        expect(screen.getByText('test task name')).toBeInTheDocument()

    })

    it('Ready section: adding tasks', () => {

        const initialData = localStorage.setItem(
            'data',
            `{
                "backlog": [{
                  "id": "0",
                  "name": "test task",
                  "description": ""
                }],
                "ready": [],
                "InProgress": [],
                "finished": []
                }`
          )

        const testTask = {
            backlog: [
                {
                  id: '0',
                  name: 'test task',
                  description: ''
                },
              ],
              ready: [],
              progress: [],
              finish: [],
            }

        const { getByTestId } = render(<App />)
        let btnAdd = screen.getByTestId('ready-button')
        fireEvent.click(btnAdd)
        const select = screen.getByTestId('select')
        fireEvent.click(select)
        fireEvent.change(screen.getByTestId('select'), { target: { value: 'test task' } })
        const updatedData = localStorage.getItem('data')
        const newTask = updatedData && JSON.parse(updatedData)
        expect(testTask.backlog[0].name).toBe(newTask.ready[0].name)

    })

})
