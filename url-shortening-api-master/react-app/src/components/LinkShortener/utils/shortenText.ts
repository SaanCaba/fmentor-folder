export function shortenText(text:string){
    let shortedText:string = ''
    for(let i = 0; i < text.length ; i++){
        if(text[i] === ',' || text[i] === '.'){
            break;
        }
        shortedText += text[i]
    }
    return shortedText + '.'
}