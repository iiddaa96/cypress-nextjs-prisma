## Inlämning - End-To-End

I den här laborationen ska du individuellt skapa en webbapplikation vars funktionalitet ska testas med Cypress E2E automatiserade testar. Vad du skapar för typ av applikation är valfritt, rekommendationen är att du skapar en NextJS app men vill du utforska andra ramverk så går det också bra.Du ska planera och skriva ner de huvudsakliga användarflödena för din applikation och skriva automatiserade E2E tester för dessa. Det ska skrivas tester på den förväntade användningen men även på vad som sker om användaren gör fel, ex matar in felaktiga värden.InlämningFör att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub. Inlämningen sker som vanligt via läroplattformen. I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet, info om hur projektet byggs, körs och testas.PresentationDu ska i samband med inlämning hålla i en presentation där du presenterar din webbapplikation. Du ska även presentera din användarflöden och berätta varför du har skapat just dessa, samt hur du har genomfört och strukturerat ditt arbete. Dessutom ska presentationen innefatta en reflekterande del. Du har ca 10 min på dig.

Jag har skapat en simpel applikation som är en parfym blogg där du lägger till och kan ta bort inlägg via ett formulär samt se mer beskrivning på en singel sida.

#### Cypress tester

Ibland får man reloada 1-2 gånger, men testerna ska vara gröna.

- Användaren besöker sidan och ser en header samt en lista med inlägg. Inläggen innehåller en bild, en titel. Användaren kan klicka på en post för att se mer information om den.
- Användaren klickar in sig på en post och ser en bild, en titel och en beskrivning av posten.
- Användaren besöker sidan och ser en lista med inlägg. Användaren klickar på en "ta bort"-knapp på en post och posten tas bort från sidan.
- Användaren besöker sidan och klickar på "lägg till ett nytt inlägg"-knappen och skriver in ett nytt inlägg i formuläret som visas. När användaren är klar klickar hen på spara knappen och kommer tillbaka till startsidan och ser det nya inlägget.

---

### Verktyg

- Prisma
- NextJS
- MUI
- Typescript
- React
- Tailwind
- Cypress

### Krav för godkänt:

1. Webbapplikationen är ett fullstack projekt med frontend, backend och databas (✓)
2. Dina användarflöden fungerar och är kontrollerade av automaterade E2E tester (✓)
3. Testerna körs mot en egen test databas. (✓)
4. Git & GitHub har använts (✓)
5. Projektmappen innehåller en README.md fil - (läs ovan för mer info) (✓)
6. Uppgiften lämnas in i tid! (✓)
7. Muntlig presentation är genomförd (✓)

### För väl godkänt:

1. Alla punkter för godkänt är uppfyllda (✓)
2. Dina användarflöden testas omfattande
3. Mockning används på en relevant och nödvändigt sätt
