import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld(
  'electron',
  {
    access: {
        getDefault: (): Promise<string> => ipcRenderer.invoke('access/getDefault'),
        forgotPassword: (): Promise<boolean> => ipcRenderer.invoke('access/forgotPassword')
    }
  },
)
