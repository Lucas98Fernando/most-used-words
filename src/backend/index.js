// IPC = Inter Process Communication
// O IPC é utilizando no Electron para criar canais de comunição com outros arquivos da aplicação
import { ipcMain } from 'electron'

ipcMain.on('process-subtitle', (evt, paths) => {
    console.log(paths)
    evt.reply('process-subtitle', [{
            name: "i",
            amount: "1034",
        },
        {
            name: "you",
            amount: "1334",
        },
        {
            name: "how",
            amount: "301",
        },
    ])
})