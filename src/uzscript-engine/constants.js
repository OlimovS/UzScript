const basicKeywords = {
    "agar": "if",
    "davomida": "while",
    "bilan": "with",
    "aksincha": "else",
    "bajar": "do",
    "urunibkor": "try",
    "nihoyat": "finally",
    "qaytar": "return",
    "chiqibket": "break",
    "davomet": "continue",
    "yangi": "new",
    "ochir": "delete",
    "boshat": "void",
    "uloqtir": "throw",
    "tuzatuvchi": "debugger",
    "deylik": "let",
    "konst": "const",
    "funksiya": "function",
    "tutibol": "catch",
    "aylan": "for",
    "mobodo": "switch",
    "holatda": "case",
    "oddiyholda": "default",
    "ichida": "in",
    "ningturi": "typeof",
    "ningnamunasi": "instanceof",
    "togri": "true",
    "notogri": "false",
    "aniqmas": "null",
    "elonqilinmagan": "undefined",
    "sonemas": "NaN",
    "Cheksizlik": "Infinity",
    "bu": "this",
    "sinf": "class",
    "super": "super",
    "yield": "yield",
    "exportqil": "export",
    "importqil": "import",
    "kengaytir": "extends",
    "kut": "await"
}

const otherKeywords ={
    'ekran.yoz': 'ekrangaYozishFunksiyasi'
}

export const UzScriptToJavascriptValues = {
   ...basicKeywords,
   ...otherKeywords
}