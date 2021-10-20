module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            // Agrupar as palavras recebidas em um único objeto
            // ['Lucas', 'Lucas', 'Lucas', 'Fernando', 'Fernando']
            // { Lucas: 3, Fernando: 2 }
            const groupedWords = words.reduce((obj, word) => {
                // Se dentro do meu objeto já tiver a palavra passada, será adicionado a quantidade total a um contador
                if (obj[word]) {
                    obj[word] = obj[word] + 1
                } else {
                    // Caso contrário... Quer dizer que eu estou recebendo essa palavra pela primeira vez
                    obj[word] = 1
                }
                return obj
            }, {})
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({
                    name: key,
                    amount: groupedWords[key]
                }))
                .sort((word1, word2) => word2.amount - word1.amount)
            resolve(groupedWordsArray)
        } catch (e) {
            reject(e)
        }
    })
}