import { join } from 'node:path'
import { app, BrowserWindow } from 'electron'
import { ElectronModule } from '@doubleshot/nest-electron'

export default ElectronModule.registerAsync({
    useFactory: async () => {
        const isDev = !app.isPackaged
        const win = new BrowserWindow({
        width: 1024,
        height: 768,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            preload: join(__dirname, '../preload/index.js'),
        },
        })

        win.on('closed', () => {
        win.destroy()
        })

        const URL = isDev
        ? process.env.DS_RENDERER_URL
        : `file://${join(app.getAppPath(), 'dist/render/index.html')}`

        win.loadURL(URL)

        return { win }
    },
});