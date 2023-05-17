import { homePage } from "../Page Objects/homePage";
import * as tripData from "@fixtures/AirTripData.json";

describe('Get flight prices', () => {
  let today = new Date().getDate()
  beforeEach(() => {
    cy.goToAirMalta();
  })

  it('Get the first available one way flight price from Vienna to Malta', () => {
    homePage.selectAirPorts(tripData.departureAirPort, tripData.destinationAirPort);
    homePage.bookFromTomorrowOneWay(today);
    cy.get(homePage.prices, { timeout: 15000 }).first().should('be.visible').then((price) => {
      cy.log(`the first available flight price is: ${price.text()} Euros 
        from ${tripData.departureAirPort} to ${tripData.destinationAirPort}`);
    })
  })

  it('Get the round trip flight price from Vienna to Malta with provided dates', () => {
    homePage.selectAirPorts(tripData.departureAirPort, tripData.destinationAirPort);
    homePage.bookFromCertainDay(tripData.departureDate, tripData.returnDate);
    cy.get(homePage.selectedDayPrice, { timeout: 15000 }).should('be.visible').then((price) => {
      cy.log(`the flight price is: ${price.text()} Euros 
        from ${tripData.departureAirPort} to ${tripData.destinationAirPort} within
        ${tripData.departureDate} & ${tripData.returnDate}`);
    })

  })

})
