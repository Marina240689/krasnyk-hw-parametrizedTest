
///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Cosmic Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  })

  describe('Test', () => {

    const toastData = [
      {
        chooseToast: {
          position: '[id="nb-option-24"]',
          title: 'Toast with top right position',
          content: 'Hi, you have chosen the toast with top right position and Primary type',
          type: 'nb-option:nth-child(1)'
        },

        expectedResult: {
          icon: 'email',
          title: 'Toast with top right position',
          content: 'Hi, you have chosen the toast with top right position and Primary type',
          color: 'rgb(161, 110, 255)',
          position: 'justify-content: flex-end; align-items: flex-start;'
        }
      },

      {
        chooseToast: {
          position: '[id="nb-option-25"]',
          title: 'Toast with top left position',
          content: 'Hi, you have chosen the toast with top left position and Success type',
          type: 'nb-option:nth-child(2)'
        },

        expectedResult: {
          icon: 'checkmark',
          title: 'Toast with top left position',
          content: 'Hi, you have chosen the toast with top left position and Success type',
          color: 'rgb(0, 214, 143)',
          position: 'justify-content: flex-start; align-items: flex-start;'
        }
      },

      {
        chooseToast: {
          position: '[id="nb-option-26"]',
          title: 'Toast with bottom left position',
          content: 'Hi, you have chosen the toast with bottom left position and Success type',
          type: 'nb-option:nth-child(3)'
        },

        expectedResult: {
          icon: 'question-mark',
          title: 'Toast with bottom left position',
          content: 'Hi, you have chosen the toast with bottom left position and Success type',
          color: 'rgb(0, 149, 255)',
          position: 'justify-content: flex-start; align-items: flex-end;'
        }
      },

      {
        chooseToast: {
          position: '[id="nb-option-27"]',
          title: 'Toast with bottom right position',
          content: 'Hi, you have chosen the toast with bottom right position and Success type',
          type: 'nb-option:nth-child(4)'
        },

        expectedResult: {
          icon: 'alert-triangle',
          title: 'Toast with bottom right position',
          content: 'Hi, you have chosen the toast with bottom right position and Success type',
          color: 'rgb(255, 170, 0)',
          position: 'justify-content: flex-end; align-items: flex-end;'
        }
      },

     


    ]

    toastData.forEach(data => {

      it(`Checking ${data.chooseToast.title}`, () => {
        cy.get('[class*="position-select"] .select-button').click();
        cy.get(data.chooseToast.position).click();
        cy.get('[name="title"]').clear().type(data.chooseToast.title);
        cy.get('[name="content"]').clear().type(data.chooseToast.content);
        cy.get('label:contains("Toast type:")+nb-select').click();
        cy.get(data.chooseToast.type).click();
        cy.get('button:contains("Show toast")').click();


        /*

        check toast

        */

        cy.get('nb-toastr-container nb-toast').then(toast => {
          expect(toast).to.include.text(data.expectedResult.title);
          expect(toast).to.contain.text(data.expectedResult.content);
          expect(toast).to.have.css('background-color').to.eqls(data.expectedResult.color);

        cy.get('[ng-reflect-config="[object Object]"] [data-name="Layer 2"] [data-name]').then(icon => {
          expect(icon).to.have.attr('data-name').to.equal(data.expectedResult.icon);
        });

        cy.get('[class="toastr-overlay-container cdk-global-overlay-wrapper"]').then(position => {
          expect(position.attr('style')).to.equal(data.expectedResult.position);
        });

        });

        })

    })

   


   

 })
