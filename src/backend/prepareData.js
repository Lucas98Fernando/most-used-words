module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            // Processar as palavras através das linhas recebidas
            const words = rows
                // Filtrando as linhas válidas dos arquivos de legenda e removendo pontuações
                .filter(filterValidRows)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('""', ''))
            resolve(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRows(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

const mergeRows = (fullText, row) => `${fullText} ${row}`