Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione:
Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa).
Buon lavoro e buon divertimento!

**MILESTONE 1**
HTML
1. Creo una struttura HTML con un div con id=app
2. Creo un div per un input di testo
3. Creo un div per un input di ricerca
4. Creo un div per ospitare i todo con un pulsante per completarli  e un pulsante per cancellarli

JavaScript
1. Creo una App Vue.js
2. creo le variabili testo e fatto come booleano
3. stampo il testo dell'item nel div per ospitare i todo

**MILESTONE 2**
HTML
1. Creo un ciclo for per l'input con Vue.js
2. Aggiungo l'icona X per canvellare l'item

JavaScript
1. creo una funzione dentro methods per aggiungere item alla lista, al click su "Aggiungi"
2. creo una funzione dentro methods per barrare un item completato, al click su X

**MILESTONE 3**
HTML
1. Aggiungo un campo input testuale e un pulsante aggiungi

JavaScript
1. creo una funzione dentro methods per aggiungere item alla lista, al click su "Aggiungi"

**BONUS 3**
JavaScript
1. creo una funzione dentro methods per aggiungere item alla lista, al premere del tasto "Invio"
2. aggiungo un comando toggle per completare o reinizare l'item. L'item verrà barrato se completato, sbarrato se reiniziato.