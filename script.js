//your code here
() => { 
    cy.visit(baseUrl + "/main.html"); 
    cy.contains('List of medias'); 
    cy.get('ol li').should('have.length', 3); 
    cy.get('ol li:first img')
        .should('have.attr', 'src', "https://picsum.photos/id/123/200/300")
        .should('have.attr', 'alt', "water droplets"); 
    cy.get('ol li:nth-child(2) source')
        .should('have.attr', 'src', "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"); 
    cy.get('ol li:last audio')
        .should('have.attr', 'src', "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"); 
}
