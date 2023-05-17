
export const homePage = {

    departureAirPort: '.route-selection-origin > .input-holder > .form-control',
    destinationAirPort: '.route-selection-destination > .input-holder > .form-control',
    searchAirPort: '.airport-search-input',
    startDatePicker: '.startDate > .form-control',
    selectDays: '.calendar-day',
    selectToday: '.DayPicker-Day--today',
    endDatePicker: '.endDate > .form-control',
    nextMonthDays: '.DayPicker-Month:nth-child(2) .DayPicker-Day > .date-picker-day-cell',
    findFlightsBtn: '.buttons > .d-none',
    prices: 'button .dUvWQN',
    selectedDayPrice: 'button .kszxNW .dUvWQN',
    flexiableDates: '.LinkUI__Link-beRZqo',
    departureAirPortDetails: '.sc-fXoxut:nth-child(1)',
    destinationAirPortDetails: '.sc-fXoxut:nth-child(4)',
    tripType: '.select-input > input[title="Round trip"]',

    selectAirPorts(originAirPort: string, secondAirPort: string) {
        cy.get(this.departureAirPort).should('be.visible').click();
        cy.get(this.searchAirPort).type(originAirPort);
        cy.contains(originAirPort).click();
        cy.get(this.destinationAirPort).should('be.visible').click();
        cy.get(this.searchAirPort).type(secondAirPort);
        cy.contains(secondAirPort).click();
    },
    bookFromTomorrowOneWay(day: number) {
        cy.get(this.tripType).click();
        cy.contains('One way').click();
        cy.get(this.startDatePicker).click();
        cy.get(this.selectDays).eq(day).click();
        cy.get(this.findFlightsBtn).click();
        cy.get(this.flexiableDates).should('be.visible').click();
    },

    bookFromCertainDay(departyeDay: string, returnDay: string) {
        cy.get(this.startDatePicker).click();
        cy.get(`[aria-label*="${departyeDay}"] > .date-picker-day-cell`).click();
        cy.get(this.endDatePicker).click();
        cy.get(`[aria-label*="${returnDay}"] > .date-picker-day-cell`).trigger("click");
        cy.get(this.findFlightsBtn).click();
        cy.get(this.flexiableDates).should('be.visible').click();
    }
}