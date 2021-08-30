"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticePage = void 0;
const protractor_1 = require("protractor");
class PracticePage {
    constructor() {
        this.title = protractor_1.$("body h1");
        this.website = protractor_1.browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        this.radioButtonExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Radio Button Example"));
        this.suggestionClassExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .cen-left-align fieldset legend", "Suggession Class Example"));
        this.dropDownExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .cen-right-align fieldset legend", "Dropdown Example"));
        this.checkBoxExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Checkbox Example"));
        this.switchWindowExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Switch Window Example"));
        this.switchTabExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .cen-align fieldset legend", "Switch Tab Example"));
        this.switchToAlertExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer div fieldset legend", "Switch To Alert Example"));
        this.webTableExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Web Table Example"));
        this.elementDisplayExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Element Displayed Example"));
        this.fixedTableFixedHeader = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .right-align fieldset legend", "Web Table Fixed header"));
        this.mouseHoverExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer .left-align fieldset legend", "Mouse Hover Example"));
        this.iFrameExample = protractor_1.element(protractor_1.by.cssContainingText(".block.large-row-spacer fieldset legend", "iFrame Example"));
        this.radioOne = protractor_1.$(".block.large-row-spacer .left-align fieldset label[for='radio1'] input");
        this.radioTwo = protractor_1.$(".block.large-row-spacer .left-align fieldset label[for='radio2'] input");
        this.radioThree = protractor_1.$(".block.large-row-spacer .left-align fieldset label[for='radio3'] input");
        this.suggestionClassInput = protractor_1.$(".cen-left-align fieldset input[type='text']");
        this.suggestionClassDropDownFirst = protractor_1.$$("ul#ui-id-1.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front li:nth-child(1)");
        this.dropDownExampleSecond = protractor_1.$(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(2)");
        this.dropDownExampleThird = protractor_1.$(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(3)");
        this.dropDownExampleFourth = protractor_1.$(".block.large-row-spacer .cen-right-align fieldset select option:nth-child(4)");
        this.dropDownExampleInput = protractor_1.$(".block.large-row-spacer .cen-right-align fieldset select");
        this.checkboxOptionOne = protractor_1.$("label[for='bmw'] input#checkBoxOption1");
        this.checkboxOptionTwo = protractor_1.$("label[for='benz'] input#checkBoxOption2");
        this.checkboxOptionThree = protractor_1.$("label[for='honda'] input#checkBoxOption3");
        this.switchWindowButton = protractor_1.$("button#openwindow.btn-style.class1");
        this.switchTabButton = protractor_1.$("#opentab");
        this.switchToAlertInput = protractor_1.$("input#name[name='enter-name'].inputs");
        this.switchToAlertButton = protractor_1.$("input#alertbtn.btn-style");
        this.switchToConfirmButton = protractor_1.$("input#confirmbtn.btn-style");
        this.elementDisplayedHide = protractor_1.$("#hide-textbox");
        this.elementDisplayedShow = protractor_1.$("#show-textbox");
        this.elementDisplayedInput = protractor_1.$("#displayed-text");
        this.webTableFixedEach = protractor_1.$$("div.tableFixHead table#product tbody tr");
        this.mouseHover = protractor_1.element(protractor_1.by.css("div.mouse-hover"));
        this.mouseHoverReload = protractor_1.$("div.mouse-hover-content a:nth-child(2)");
        this.iFrame = protractor_1.$("iframe#courses-iframe").getWebElement();
        this.iFrameLogin = protractor_1.$("a.theme-btn.register-btn");
        this.webTableData = (row, col) => {
            return this.webTable = protractor_1.$$("table#product tbody tr").get(row).$$("td").get(col);
        };
        this.webTableFixedAll = () => {
            return this.webTableFixedEach.count();
        };
    }
}
exports.PracticePage = PracticePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2VQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcHJhY3RpY2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1RTtBQUV2RSxNQUFhLFlBQVk7SUFBekI7UUFFSSxVQUFLLEdBQWtCLGNBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuQyxZQUFPLEdBQVEsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUNoRix1QkFBa0IsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscURBQXFELEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFBO1FBQ2hKLDJCQUFzQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5REFBeUQsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDNUosb0JBQWUsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMERBQTBELEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQzlJLG9CQUFlLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHNEQUFzRCxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtRQUMxSSx3QkFBbUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscURBQXFELEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO1FBQ2xKLHFCQUFnQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxvREFBb0QsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDM0kseUJBQW9CLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDZDQUE2QyxFQUFFLHlCQUF5QixDQUFDLENBQUMsQ0FBQTtRQUM3SSxvQkFBZSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFB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