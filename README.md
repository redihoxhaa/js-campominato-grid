# PRATO FIORITO

#### CONSEGNA DELL'ESERCIZIO 

```
Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
```

---

#### SVOLGIMENTO

Partiamo con impostare la nostra pagina in HTML e CSS così come vogliamo che appaia quando verrà generata la griglia. Quindi creiamo un documento HTML con **header**, **main** e **footer**. Flexiamo il body con flex direction column, facciamo crescere il main con flex-grow, e diamo un po' di padding alle 3 macroaree. 

Inseriamo un logo, un titolo, un menù selezione (che ci servirà per dopo) e un bottone nell'header, mentre nel footer inseriamo l'autore del sito. 

Nel main creiamo una call to action a centro schermo (Es. "Clicca il pulsante PLAY per cominciare a giocare!"), che andremo a far scomparire una volta schiacciato il pulsante play. Inseriamo una board che potrebbe essere un **ul** e andiamo ad inserire e stilizzare i nostri **li** all'interno di essa. Una volta stilizzato il tutto, cancelliamo i nostri **li** dal codice HTML e creiamo una funzione in JS con 3 argomenti (tag, classe, contenuto), con la quale andiamo a creare i nostri **li**. Possiamo decidere in fase di creazione se includere nei **li** un event listener sul click, oppure se aggiungerlo direttamente al padre. In qualsiasi caso dovremmo predisporre una classe CSS che andrà a modificare il background della nostra cella.

Andiamo successivamente ad inizializzare il nostro ciclo per appendere il **li** nell'**ul**. Per resettare il campo quando premiamo play, possiamo aggiungere un comando che stampa un carattere vuoto all'interno dell'**ul** tramite manipolazione del DOM, in modo che prima che venga generato il nuovo campo, sarà sovrascritto il primo.
