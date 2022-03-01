export const  dictionary = {
    // Header
    "about us": "о нас",
    "portfolio": "порфолио",
    "shop": "Магазин",
    "contacts": "контакты",
}



export const translate = (str: string, lang: string):string => {
    if (lang === "eng") {
        return str
    } else {
        if (dictionary.hasOwnProperty(str)) {
            // @ts-ignore
            return dictionary[str]
        } else {
            return "Не переведено"
        }
    }
}