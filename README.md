# js-biglietto-treno

esercizio di oggi: Calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


1)Quanti km devi fare?
2)Quanti anni hai?
3)if età=< 64 && età>=19
    P=km*0,21 euro
4)else if età>=65
    P=(km*0,21) - 40%)    
5)else if età<=18
    P=(km*0,21) - 20%)    
6)Pubblicazione risultato    

