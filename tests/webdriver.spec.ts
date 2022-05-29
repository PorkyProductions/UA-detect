import '../src/webdriver.ts'

test("Make sure that the function returns either true or false", () => {
    expect(typeof(webdriverControlled)).toBe("boolean");
});


test("Make sure the function retunrs the eexpected values", () => {
    expect(robotStatus).toBe("ROBOT_controlled").or.toBe("HUMAN_controlled");
})