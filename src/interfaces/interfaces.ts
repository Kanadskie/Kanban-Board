interface task {
  id: number
  name: string
  description: string
}

interface data {
  [mode: string]: task[]
  backlog: task[]
  ready: task[]
  inProgress: task[]
  finished: task[]
}

interface sectionsProps {
  appData: data
  setAppData: Function
}

interface sectionProps {
  appData: data
  setAppData: Function
  name: string
  tasks: task[]
  mode: string
  prevMode: string
  prevTasks: task[]
}

export { data, task, sectionProps, sectionsProps }
