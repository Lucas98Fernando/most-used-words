// IPC = Inter Process Communication
// O IPC é utilizando no Electron para criar canais de comunição com outros arquivos da aplicação
import {
    ipcMain
} from 'electron'

const pathToRows = require('./pathToRows')
const prepareData = require('./prepareData')
const groupedWords = require('./groupedWords')

ipcMain.on('process-subtitle', (evt, paths) => {
    pathToRows(paths)
        .then((rows) => prepareData(rows))
        .then((words) => groupedWords(words))
        .then((groupedWords) => evt.reply('process-subtitle', groupedWords))
})