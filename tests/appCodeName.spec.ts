describe('appCodeName is properly detected', () => {
    const nav = window.navigator
    let appCodeName = window.navigator.appCodeName
    beforeEach(() => {
        expect(nav).toBe(navigator)
        expect(typeof(appCodeName)).toBe("string")
    })
    test.todo('makes sure the correct returns are created')
})