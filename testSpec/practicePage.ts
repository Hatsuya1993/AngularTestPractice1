import {element, by, browser, ExpectedConditions} from 'protractor'
import protractor from 'protractor'
import { PracticePage } from '../pageObjects/practicePage'

describe('Check the element is displayed', () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("Title is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.title.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Radio Button Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.radioButtonExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Suggestion Class Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.suggestionClassExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Dropdown Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.dropDownExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Checkbox Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.checkBoxExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Switch Window Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchWindowExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Switch Tab Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchTabExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Switch To Alert Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchToAlertExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Web Table Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.webTableExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Element Display Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.elementDisplayExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Web Table Fixed Header is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.fixedTableFixedHeader.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Mouse Hover Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.mouseHoverExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })
    
    it("iFrame Example is displayed", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.iFrameExample.isDisplayed().then(data => {
            expect(data).toBe(true)
        })
    })

})

describe('Testing the radio button functionality', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("Click the first option and verify", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.radioOne.click()
        await practicePage.radioOne.isSelected().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Click the second option and verify", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.radioTwo.click()
        await practicePage.radioTwo.isSelected().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Click the third option and verify", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.radioThree.click()
        await practicePage.radioThree.isSelected().then(data => {
            expect(data).toBe(true)
        })
    })

})

describe('Testing the functionality for search', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("When Singapore is typed in, suggestion for it will appear", async () => {

        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.suggestionClassInput.sendKeys("singapore")
        await practicePage.suggestionClassDropDownFirst.click()
        await practicePage.suggestionClassInput.getAttribute("value").then(data => {
                expect(data).toBe("singapore")
            })
    })

})

describe('Testing the functionality for dropdown example', async () => {

    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("Select the first option and check", async () => {

        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.dropDownExampleSecond.click()
        await practicePage.dropDownExampleInput.getAttribute('value').then(data => {
            expect(data).toBe("option1")
        })

    })

    it("Select the second option and check", async () => {

        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.dropDownExampleThird.click()
        await practicePage.dropDownExampleInput.getAttribute('value').then(data => {
            expect(data).toBe("option2")
        })

    })

    it("Select the third option and check", async () => {

        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.dropDownExampleFourth.click()
        await practicePage.dropDownExampleInput.getAttribute('value').then(data => {
            expect(data).toBe("option3")
        })

    })

})

describe('Testing the functionality of the checkbox example', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("Select the first option is checked", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.checkboxOptionOne.click()
        await practicePage.checkboxOptionOne.isSelected().then(data => {
            expect(data).toBe(true)
        })
    })

    it("Select the second option is checked", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.checkboxOptionTwo.click()
        await practicePage.checkboxOptionTwo.isSelected().then(data => {
            expect(data).toBe(true)
        })

    })

    it("Select the second option is checked", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.checkboxOptionThree.click()
        await practicePage.checkboxOptionThree.isSelected().then(data => {
            expect(data).toBe(true)
        })

    })

})

describe('Testing the functionality for the switch window example', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it("Click the button and check the popup window", async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchWindowButton.click()
        await browser.getAllWindowHandles().then( async (handles) => {
            browser.switchTo().window(handles[1]).then( async () => {
                browser.getCurrentUrl().then(data => {
                    expect(data).toBe("http://www.qaclickacademy.com/")
                })
            })
        })
    })

})

describe('Testing the functionality of the switch tab exmaple', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('When button is pressed check the new open tab', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchTabButton.click()
        await browser.getAllWindowHandles().then(async (handles) => {
            await browser.switchTo().window(handles[1]).then(async() => {
                await browser.getCurrentUrl().then(data => {
                    expect(data).toBe("https://www.rahulshettyacademy.com/#/index")
                })
            })
        })
    })
})

describe('Testing the functionality for switch to alert example', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('When alert is clicked with input data, popup appears and check data', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchToAlertInput.sendKeys("hazrul")
        await practicePage.switchToAlertButton.click()
        await (await browser.switchTo().alert()).getText().then(data => {
            expect(data).toBe("Hello hazrul, share this practice page and share your knowledge")
        })
    })

    it('When confirm is clicked with input data, popup appears and check data', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.switchToAlertInput.sendKeys("hazrul")
        await practicePage.switchToConfirmButton.click()
        await (await browser.switchTo().alert()).getText().then(data => {
            expect(data).toBe("Hello hazrul, Are you sure you want to confirm?")
        })
    })

})

describe('Testing the functionality for the web table', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('Check the data for row 1 column 2', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.webTableData(1, 1).getText().then(data => {
            expect(data).toBe("Selenium Webdriver with Java Basics + Advanced + Interview Guide")
        })
    })

    it('Check the data for row 5 column 3', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.webTableData(5, 2).getText().then(data => {
            expect(data).toBe('25')
        })
    })
})

describe('Testing the functionality of element displated example', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('When the hide button is clicked, input is hidden', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.elementDisplayedHide.click()
        await practicePage.elementDisplayedInput.isDisplayed().then((data) => {
            expect(data).toBe(false)
        })
    })

    it('When the show button is clicked, input is showed', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.elementDisplayedShow.click()
        await practicePage.elementDisplayedInput.isDisplayed().then((data) => {
            expect(data).toBe(true)
        })
    })

})

describe('Testing the web table fixed header for total amount', async () => {
  
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('The total amount should equals to the total amount collected', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        console.log(await practicePage.webTableFixedAll());
    })

})

describe('Testing the functionality of the mouse hover', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
    })

    it('When the reload page is selected, page reloads', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await browser.actions().mouseMove(practicePage.mouseHover).perform()
        await practicePage.mouseHoverReload.click()
        await browser.sleep(5000)
    })
})

describe('Testing the functionality of the iframe', async () => {
    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await practicePage.website
        await browser.driver.manage().window().maximize()
    })

    it('When the reload page is selected, page reloads', async () => {
        await browser.waitForAngularEnabled(false)
        let practicePage = new PracticePage()
        await browser.switchTo().frame(practicePage.iFrame)
        await practicePage.iFrameLogin.getText().then(data => {
            expect(data).toBe("LOGIN")
        })
    })
})














