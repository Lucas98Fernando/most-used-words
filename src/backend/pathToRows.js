const fs = require("fs")

module.exports = paths => {
    return new Promise((resolve, reject) => {
        try {
            // Conteúdo de todos os arquivos mapeados, obtidos através do path
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                // Concatenando o conteúdo de todos os arquivos em uma string
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                // Retorna todas as linhas
                .split('\n')
            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}