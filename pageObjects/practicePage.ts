import { $, $$, browser, by, element, ElementFinder } from 'protractor'

export class PracticePage {

    title: ElementFinder = $("body h1")
    website: any = browser.get("https://rahulshettyacademy.com/AutomationPractice/")
    radioButtonExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Radio Button Example"))
    suggestionClassExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .cen-left-align fieldset legend", "Suggession Class Example"))
    dropDownExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .cen-right-align fieldset legend", "Dropdown Example"))
    checkBoxExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Checkbox Example"))
    switchWindowExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Switch Window Example"))
    switchTabExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .cen-align fieldset legend", "Switch Tab Example"))
    switchToAlertExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer div fieldset legend", "Switch To Alert Example"))
    webTableExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Web Table Example"))
    elementDisplayExample: ElementFinder = element(by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Element Displayed Example"))
    fixedTableFixedHeader: ElementFinder =  element(by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Web Table Fixed header"))
    mouseHoverExample: ElementFinder =  element(by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Mouse Hover Example"))
    iFrameExample: ElementFinder =  element(by.cssContainingText(".block.large-row-spacer fieldset legend", "iFrame Example"))
    radioOne: ElementFinder = $(".block.large-row-spacer .left-align fieldset label[for='radio1'] input")
    radioTwo: ElementFinder = $(".block.large-row-spacer .left-align fieldset label[for='radio2'] input")
    radioThree: ElementFinder = $(".block.large-row-spacer .left-align fieldset label[for='radio3'] input")
    suggestionClassInput: ElementFinder = $(".cen-left-align fieldset input[type='text']")
    suggestionClassDropDownFirst: any = $$("ul#ui-id-1.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front li:nth-child(1)")
    dropDownExampleSecond: ElementFinder = $(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(2)")
    dropDownExampleThird: ElementFinder = $(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(3)")
    dropDownExampleFourth: ElementFinder = $(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(4)")
    dropDownExampleInput: ElementFinder = $(".block.large-row-spacer .cen-right-align fieldset select")
    checkboxOptionOne: ElementFinder = $("label[for='bmw'] input#checkBoxOption1")
    checkboxOptionTwo: ElementFinder = $("label[for='benz'] input#checkBoxOption2")
    checkboxOptionThree: ElementFinder = $("label[for='honda'] input#checkBoxOption3")
    switchWindowButton: ElementFinder = $("button#openwindow.btn-style.class1")
    switchTabButton: ElementFinder = $("#opentab")
    switchToAlertInput: ElementFinder = $("input#name[name='enter-name'].inputs")
    switchToAlertButton: ElementFinder = $("input#alertbtn.btn-style")
    switchToConfirmButton: ElementFinder = $("input#confirmbtn.btn-style")
    webTable: any
    elementDisplayedHide: ElementFinder = $("#hide-textbox")
    elementDisplayedShow: ElementFinder = $("#show-textbox")
    elementDisplayedInput: ElementFinder = $("#displayed-text")
    webTableFixedEach: any = $$("div.tableFixHead table#product tbody tr")
    mouseHover: ElementFinder = element(by.css("div.mouse-hover"))
    mouseHoverReload: ElementFinder = $("div.mouse-hover-content a:nth-child(2)")
    iFrame: any = $("iframe#courses-iframe").getWebElement()
    iFrameLogin: ElementFinder = $("a.theme-btn.register-btn")


    webTableData = (row, col) => {
        return this.webTable = $$("table#product tbody tr").get(row).$$("td").get(col)
    }

    webTableFixedAll = () => {
        return this.webTableFixedEach.count()
    }

}