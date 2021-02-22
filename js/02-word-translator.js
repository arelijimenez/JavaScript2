//Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four 
//codes, display the translated version of "Hello World" for the given language within the console window. If the user 
//enters anything but those four language codes, the application should default to English. 

var language = prompt("What is your language, is it es, de, en, or fr? ");

switch (language) {
    case 'es':
        console.log('Hola mundo !');
        break;
    case 'de':
        console.log('(eh glun e tey !');
        break;
    case 'en':
        console.log('Hello world !');
        break;
    case 'fr':
        console.log('Bonjour le monde !');
        break;
    default:
        console.log('Hello Word !');
        break;
}
